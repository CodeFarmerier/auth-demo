"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
type LoginType = "github" | "google";
const CardSocial = () => {
  const handlerSignIn = (loginType: LoginType) => {
    signIn(loginType, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex items-center w-full  gap-x-5">
      <Button
        variant="secondary"
        className="w-full"
        size={"lg"}
        onClick={async () => handlerSignIn("google")}
      >
        <FcGoogle size={20} />
      </Button>
      <Button
        variant="secondary"
        className="w-full"
        size={"lg"}
        onClick={async () => handlerSignIn("github")}
      >
        <FaGithub size={20} />
      </Button>
    </div>
  );
};

export default CardSocial;
