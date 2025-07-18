// src/pages/Home.tsx
import { Card } from "../../components/Card/Card";
import { Search } from "lucide-react";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Loading } from "../../components/Loading/Loading";
import { useHome } from "../../hooks/useHome";

export const Home = () => {
  const {
    loading,
    selectedRegion,
    search,
    regions,
    filteredCountries,
    setSelectedRegion,
    setSearch,
  } = useHome();

  if (loading) return <Loading />;

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 transition-theme w-full py-8 flex items-center justify-between px-4 gap-4">
        <div className="w-1/3 relative">
          <Input
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="full px-8 h-12"
          />
          <Search className="absolute left-5 top-1/2 -translate-1/2 w-4 text-gray-500" />
        </div>
        <Select
          value={selectedRegion}
          onValueChange={setSelectedRegion}>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Filter by Region">
              {selectedRegion === "all" || !selectedRegion
                ? "All Regions"
                : selectedRegion}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem className="cursor-pointer" value="all">
                All
              </SelectItem>
              {regions.map((region, idx) => (
                <SelectItem key={idx} className="cursor-pointer" value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 transition-theme min-h-screen px-4 lg:px-[3%] py-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 ">
        {filteredCountries?.map((country, index) => (
          <Card
            key={index}
            title={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            to={{
              path: `/country_description/${encodeURIComponent(
                country.name.common
              )}`,
              state: { country },
            }}
          />
        ))}
      </div>
    </>
  );
};
