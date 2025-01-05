import { useState, useEffect } from "react";

type fetchParams = {
  url: string;
};

export const useFetch = <T>({ url }: fetchParams) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`couldnt fetch data; status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);

  return { data, error };
};
