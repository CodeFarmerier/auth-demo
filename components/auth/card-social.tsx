"us client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "../ui/button";
const CardSocial = () => {
  return (
    <div className="flex items-center w-full  gap-x-5">
      <Button variant="secondary" className="w-full" size={"lg"}>
        <FcGoogle size={20} />
      </Button>
      <Button variant="secondary" className="w-full" size={"lg"}>
        <FaGithub size={20} />
      </Button>
    </div>
  );
};

export default CardSocial;
