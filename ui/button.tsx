import { ReactNode, FC } from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

interface ButtonProps {
  children?: ReactNode;
  size?: string;
}

const ButtonTypes = {
  primary:
    "inline-flex items-center gap-1 disable:opacity-50 justify-center rounded px-3 py-1 bg-primary hover:bg-opacity-30 transition text-primary-foreground",
  secondary:
    "inline-flex items-center gap-1 disable:opacity-50 justify-center rounded px-3 py-1 bg-neutral-100 hover:bg-neutral-200/70 transition text-foreground",
};

const className = cn(ButtonTypes.primary);

console.log(className);

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={className}>
      {/* <SearchIcon className="w-4 h-4 mr-2" /> */}
      {children}
    </button>
  );
};

export default Button;
