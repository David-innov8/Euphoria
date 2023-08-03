import React, { useState } from "react";
import { useCountries } from "./FetchCountries";

function Countries() {
//   const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { data, isLoading } = useCountries;

  if (isLoading) {
    return <div>Loading.....</div>;
  }

//   const handleLanguageChange = (e) => {
//     setSelectedLanguage(e.target.value);
//   };

  //   const translatedCountries = data?.map((country) => {
  //     const translation = country.translations[selectedLanguage];
  //     return {
  //       ...country,
  //       name: translation || country.name.common,
  //     };
  //   });

  return (
    <div>
      <select className="w-52 px-1"
        id="languageSelect"
        // onChange={handleLanguageChange}
        defaultValue="en"
      >
        {
            data?.map((country)=>(
                <option value={country.cca3}> {country.name.common}</option>
            ))
        }
        <option value="en">English</option>
        <option value="fr">French</option>
        {/* Add more language options if needed */}
      </select>
      <ul>
        {data?.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
