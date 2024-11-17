import { useState, useEffect } from "react";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export function useFetch(keyword) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL + keyword)
      .then((response) => response.json)
      .then((data) => setData(data));
  }, []);

  return { data };
}
