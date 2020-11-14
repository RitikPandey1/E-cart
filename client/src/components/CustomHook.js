import { useState, useEffect } from "react";
import axios from "axios";

export const useGetHook = (url) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  console.log(url);
  const getResponse = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setResult(data);
    setLoading(false);
  };

  useEffect(() => {
    getResponse().catch((err) => {
      setLoading(false);
      setError(err);
    });
  }, [url]);

  return [result, loading, error];
};
