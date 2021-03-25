import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const data = await fetch(url);
    const result = await data.json();
    setData(result);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
