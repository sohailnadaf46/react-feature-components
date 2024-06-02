import { useEffect, useState } from "react";

const useFetchCustomHook = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const responseData = await response.json();
      setData(responseData);
      setError(null);
    } catch (error) {
      setError(`${error} some error occurred`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchCustomHook;
