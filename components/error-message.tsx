import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => {
  if (!errorMessage) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <span>{errorMessage}</span>
    </div>
  );
};

export default ErrorMessage;
