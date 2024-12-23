import { useEffect, useState } from "react";
import yelp from "../api/yelp";
export default () => {
  const [results, setResults] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "Elazig",
      },
    });

    setResults(response.data.businesses);

  };


  useEffect(() => {
    searchApi("doner");
  }, []);

  return [searchApi, results];
};
