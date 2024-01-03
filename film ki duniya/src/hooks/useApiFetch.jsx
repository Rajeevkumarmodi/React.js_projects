import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/Api";

export default function useApiFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        setLoading(false);
        setError("Somthing want wrong");
      });
  }, [url]);

  return { data, loading, error };
}
