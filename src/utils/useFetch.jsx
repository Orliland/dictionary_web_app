import { useState, useEffect } from "react";

let URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function useFetch(keyword) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  URL = URL + keyword;

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json)
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
