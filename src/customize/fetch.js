import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source();

    async function fetchData() {
      try {
        const res = await axios.get(url, {
          cancelToken: ourRequest.token,
        });
        const data = res && res.data ? res.data : [];

        setData(data);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      }
    }
    return () => {
      ourRequest.cancel("Operation canceled by the user."); // <-- 3rd step
    };
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
