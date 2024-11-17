import { useState, useEffect } from "react";

export function useFetch(keyword) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  useEffect(() => {
    if (keyword == "") {
      return;
    }

    setIsLoading(true);
    setData(null);
    setError(null);
    fetch(URL + keyword)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [keyword]);

  return { data, isLoading, error };
}
