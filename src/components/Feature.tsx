import clsx from "clsx";
import { CheckIcon } from "lucide-react";

const Feature = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <CheckIcon />
      <span>{children}</span>
    </div>
  );
};

export default Feature;
