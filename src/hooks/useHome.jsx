// src/hooks/useHome.jsx
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../context/appContext";

export const useHome = () => {
  const { state, dispatch } = useContext(AppContext);
  const { countries, loading, selectedRegion, search } = state;

  const regions = useMemo(() => {
    return [...new Set(countries?.map((c) => c.region).filter(Boolean))];
  }, [countries]);

  const filteredCountries = useMemo(() => {
    return countries
      ?.filter((item) =>
        selectedRegion && selectedRegion !== "all"
          ? item.region === selectedRegion
          : true
      )
      ?.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
      );
  }, [countries, selectedRegion, search]);

  const setSelectedRegion = (region) => {
    dispatch({ type: "SET_REGION", payload: region });
  };
  const setSearch = (value) => {
    dispatch({ type: "SET_SEARCH", payload: value });
  };
  return {
    ...state,
    regions,
    filteredCountries,
    setSelectedRegion,
    setSearch,
  };
};
