import axios from "axios";
import config from "../config"; // API anahtarını buradan al

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${config.API_KEY}`,
  },
});