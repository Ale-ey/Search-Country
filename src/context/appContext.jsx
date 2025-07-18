import { createContext, useEffect, useReducer } from "react";
import { data_fetch } from "../services/data";

const AppContext = createContext({
  countries: [],
  loading: true,
  selectedRegion: "all",
  search: "",
  dispatch: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return { ...state, countries: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_REGION":
      return { ...state, selectedRegion: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    countries: [],
    loading: true,
    selectedRegion: "all",
    search: "",
  });
  useEffect(() => {
    const fetching_data = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      try {
        const res = await data_fetch();
        dispatch({ type: "SET_COUNTRIES", payload: res.data });
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };
    fetching_data();
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
