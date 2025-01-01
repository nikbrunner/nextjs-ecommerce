import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<{
  value: string;
  className?: string;
}>;

const ProductPrice: React.FC<Props> = ({ value, className }) => {
  const [intValue, floatValue] = value.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue},<span className="text-xs align-super">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
