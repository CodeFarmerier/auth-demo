import { CheckCircledIcon } from "@radix-ui/react-icons";

const SuccessMessage = ({ successMessage }: { successMessage?: string }) => {
  if (!successMessage) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-5 w-5" />
      <span>{successMessage}</span>
    </div>
  );
};

export default SuccessMessage;
