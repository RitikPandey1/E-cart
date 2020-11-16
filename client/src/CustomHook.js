import { useState, useEffect } from "react";
import axios from "axios";

export const useGetHook = (url) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const getResponse = async () => {
    const { data } = await axios.get(url);
    setResult(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getResponse().catch((err) => {
      setError(err);
      setLoading(false);
    });
  }, [url]);

  return [result, loading, error];
};
