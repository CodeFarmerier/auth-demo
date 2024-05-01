"use server";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { LoginSchema, registerSchema } from "@/schemas";
import { getUserEmail } from "@/data/login";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
/**
 *  login
 * @param values
 * @returns
 */
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};
/**
 * register
 * @param values
 * @returns
 */
export const Register = async (values: z.infer<typeof registerSchema>) => {
  const validateFields = registerSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  const { email, name, password } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  // 先查看数据库中是否有这个email
  const user = await getUserEmail(email);
  if (user) {
    return { error: "User already exists" };
  }
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
  // TODO: 发送邮箱验证码
  return {
    success: "success email",
  };
};
