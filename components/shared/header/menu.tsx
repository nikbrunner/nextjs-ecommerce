import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

const CartButton = () => {
  return (
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCart /> Cart
      </Link>
    </Button>
  );
};

const UserButton = () => {
  return (
    <Button asChild>
      <Link href="/sign-in">
        <UserIcon /> Sign In
      </Link>
    </Button>
  );
};

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <CartButton />
        <UserButton />
      </nav>

      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>

          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <CartButton />
            <UserButton />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
