import React, { useState, useEffect } from "react";
import "../styles/Loader.scss";

const Loader = () => {
  const [headerContent, setHeaderContent] = useState("");
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);
  const headers = [
    "Collecting Incredients 🔍",
    "Mixing Incredients 🥛",
    "Baking Website 🧑‍🍳",
    "Website Is Ready!! Wow 😲"

  ];

  useEffect(() => {
    // Set the header content after a delay of 2 seconds for each header
    if (currentHeaderIndex < headers.length) {
      const timeout = setTimeout(() => {
        setHeaderContent(headers[currentHeaderIndex]);
        setCurrentHeaderIndex((prevIndex) => prevIndex + 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentHeaderIndex]);

  return (
    <div className="loader-container">
      <h1>{headerContent}</h1>
      <div className="loader" />
    </div>
  );
};

export default Loader;
