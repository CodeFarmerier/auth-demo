"use server";
import * as z from "zod";
import { LoginSchema, registerSchema } from "@/schemas";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  return {
    success: "success email code",
  };
};
export const Register = async (values: z.infer<typeof registerSchema>) => {
  const validateFields = registerSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  return {
    success: "success email code",
  };
};
