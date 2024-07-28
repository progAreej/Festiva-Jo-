import axios from "axios";
import { useState, useEffect } from "react";
function getData(url) {
const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const filteredData = Object.entries(response.data)
          .filter(([key, value]) => !value.isDeleted)
          .map(([key, value]) => ({ key, ...value }));
        setData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [url, data]);
  return [data];
}

export default getData;
