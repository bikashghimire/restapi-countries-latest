import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";

function App() {
  return (
    <>
      <div className="header">
        <div className="container">
          <h5>Where in the world</h5>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountryInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
