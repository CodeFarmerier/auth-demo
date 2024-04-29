import Link from "next/link";
import { Button } from "../ui/button";

interface IBackButtonProps {
  backButtonLabel: string;
  backButtonHref: string;
}
const BackButton = ({ backButtonLabel, backButtonHref }: IBackButtonProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Button variant="link" size="sm" asChild>
        <Link href={backButtonHref}>{backButtonLabel}</Link>
      </Button>
    </div>
  );
};

export default BackButton;
