import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Bike, ListPlus } from "lucide-react";

// TODO add links
export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bike className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">EasyBike Rent</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Cities
          </Link>
          <Button variant="outline" size="sm">
            <ListPlus className="mr-2 h-4 w-4" />
            List Your Bike
          </Button>
        </nav>
      </header>
    </div>
  );
}
