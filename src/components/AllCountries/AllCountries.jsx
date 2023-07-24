import React, { useState, useEffect } from "react";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  return (
    <>
      <div className="all__country__wrapper">
        <div className="country__top"></div>
      </div>
      <div className="country__wrapper"></div>
    </>
  );
};

export default AllCountries;
