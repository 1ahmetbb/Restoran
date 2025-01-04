import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('')
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
      setErrorMessage('')
    } catch (error) {
      console.log("API isteği hatası:", error.message);
      setErrorMessage("Baglanti hatasi")
      if (error.response) {
        console.log("Hata Yanıtı:", error.response.data); // Hata detayını göster
      }    }
  };

  useEffect(() => {
    searchApi("doner");
  }, []);

  return [searchApi, results, errorMessage];
};
