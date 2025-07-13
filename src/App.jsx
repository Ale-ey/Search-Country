import { Header } from "./components/Header/Header";
import { CountryDescription } from "./pages/CountryDescription/CountryDescription";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="country_description/:name"
          element={<CountryDescription />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
