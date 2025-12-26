import axios from "axios";
import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

    // const [error, setError] = useState(nul);

  const sendRequest = useCallback(async (config) => {
    setLoading(true);
    try {
      setLoading(true);

      const res = await axios({
        url: config.url,
        method: config.method,
        data: config.body,
        ...config,
      });

      setData(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log("user data", data);

  return {
    data,
    loading,
    sendRequest,
  };
};

export default useHttp;
