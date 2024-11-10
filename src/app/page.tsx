import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Bike,
  CreditCard,
  ListPlus,
  MapPin,
  Search,
  Shield,
  Skull,
  Smartphone,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { CitySearch } from "@/components/ui/CitySearch";

export default function Main() {
  return (
    <main className="flex-1">
      <section className="flex  justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Rent a Bike Anywhere in the World
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Easily rent a bike and explore the city on two wheels.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <CitySearch />
            </div>
          </div>
        </div>
      </section>
      <section className="flex  justify-center w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            How It Works
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <MapPin className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Find a Bike</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Search for available bikes in your desired location.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <CreditCard className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Book & Pay</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Reserve your bike and make a secure payment.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
              <Bike className="h-10 w-10 mb-2" />
              <h3 className="text-xl font-bold">Ride & Explore</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Pick up your bike and start your adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex  justify-center w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                List Your Bike
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Turn your idle bike into extra income. Join our community of
                bike owners and start earning today.
              </p>
            </div>
            <Button className="w-[200px]" size="lg">
              <ListPlus className="mr-2 h-5 w-5" />
              Start Listing
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
