import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, {
      message: "Password is required",
    }),
});
export const registerSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Please enter a valid email",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password is required",
    }),
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, {
      message: "Name is required",
    }),
});
