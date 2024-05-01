import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { authConfig } from "./auth.config";
import { db } from "./lib/db";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { LoginSchema } from "./schemas";
import { getUserEmail } from "./data/login";
export const { auth, handlers, signIn, signOut } = NextAuth({
  trustHost: true,
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        // if (!validateFields.success) return { error: "Invalid fields" };
        if (!validateFields.success) return null;
        const { email, password } = validateFields.data;
        if (!email || !password) return null;
        const user = await getUserEmail(email);
        // if (!user) return
        if (!user) return null;
        const isPasswordCorrect = await bcrypt.compare(
          password,
          user?.password || ""
        );
        // if (!isPasswordCorrect) return { error: "email or password not" };
        if (!isPasswordCorrect) return null;
        return user;
      },
    }),
  ],
});
