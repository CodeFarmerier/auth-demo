import type { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
  }
}
