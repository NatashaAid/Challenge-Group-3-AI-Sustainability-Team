// src/components/suggestionList/index.tsx
//Jia Hao Foo

import { useEffect, useState } from "react";
import Accordion from "../Accordion"; // Adjusted path
import "./style.css";
import axios from "axios";

// Sample data
const suggestions = [
  {
    id: 1,
    title: "Sustainable Materials",
    details: "Details for Sustainable Materials",
    items: ["organic cotton", "organic linen", "Bamboo"],
  },
  {
    id: 2,
    title: "Sustainable Supplier",
    details: "Details for Sustainable Supplier",
    items: ["1", "2", "3"],
  },
  {
    id: 3,
    title: "Sustainable Manufacturers",
    details: "Details for Sustainable Manufacturers",
    items: ["1", "2", "3"],
  },
];

function SuggestionList(): JSX.Element {
  // State to keep track of which accordion is open
  const [openId, setOpenId] = useState<number | null>(null);

  // Handler for toggling the accordion
  const handleToggle = (id: number) => () => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/sustainableSupplierRoutes"
      );

      console.log("res", res);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="suggestion-list">
      {suggestions.map((suggestion) => (
        <Accordion
          key={suggestion.id}
          label={suggestion.title}
          toggle={openId === suggestion.id}
          onToggle={handleToggle(suggestion.id)}
          options={suggestion.items}
        />
      ))}
    </div>
  );
}

export default SuggestionList;
