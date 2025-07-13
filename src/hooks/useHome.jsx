// src/hooks/useCountries.ts
import { useEffect, useState } from "react";
import { data_fetch } from "../services/data";

export const useHome = () => {
  const [data, setData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await data_fetch();
        setData(res.data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const regions = [...new Set(data?.map((c) => c.region).filter(Boolean))];

  const filteredCountries = data
    ?.filter((item) =>
      selectedRegion && selectedRegion !== "all"
        ? item.region === selectedRegion
        : true
    )
    ?.filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase())
    );

  return {
    loading,
    filteredCountries,
    regions,
    selectedRegion,
    setSelectedRegion,
    search,
    setSearch,
  };
};
