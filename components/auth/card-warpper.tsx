import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import CardHeaderLabel from "./card-header";
import CardSocial from "./card-social";
import BackButton from "./back-button";
interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string; // 头名称
  backButtonLabel: string; // 注册名称
  backButtonHref: string; // 注册链接
  showSocial: boolean; // 是否显示社交按钮
}
const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: Readonly<CardWrapperProps>) => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderLabel headerLabel={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <CardSocial />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton
          backButtonHref={backButtonHref}
          backButtonLabel={backButtonLabel}
        />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
