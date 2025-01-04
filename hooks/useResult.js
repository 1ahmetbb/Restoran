import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Istanbul",
        },
      });
  
      setResults(response.data.businesses);
      //console.log(response.data); // API yanıtını kontrol et
    } catch (error) {
      console.log("API isteği hatası:", error.message);
      if (error.response) {
        console.log("Hata Yanıtı:", error.response.data); // Hata detayını göster
      }    }
  };

  useEffect(() => {
    searchApi("doner");
  }, []);

  return [searchApi, results];
};
