import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export const CitySearch = () => {
  return (
    <div className="flex space-x-2">
      <Input
        className="max-w-lg flex-1"
        placeholder="Enter a city"
        type="text"
      />
      <Button type="submit">
        <Search className="mr-2 h-4 w-4" />
        Find Bikes
      </Button>
    </div>
  );
};
