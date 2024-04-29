"use client";

import { useRouter } from "next/navigation";

interface ILOginProp {
  children: React.ReactNode;
  mode?: "mode" | "redirect";
  asChild?: boolean;
}
const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: Readonly<ILOginProp>) => {
  const router = useRouter();
  const handlerLogin = () => {
    router.push("/auth/login");
  };
  return (
    <div>
      <div onClick={handlerLogin}>{children}</div>
    </div>
  );
};

export default LoginButton;
