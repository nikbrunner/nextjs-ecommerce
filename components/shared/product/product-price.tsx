import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Props = PropsWithChildren<{
  value: number;
  className?: string;
}>;

const ProductPrice: React.FC<Props> = ({ value, className }) => {
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue},<span className="text-xs align-super">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
