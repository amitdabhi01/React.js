import axios from "axios";
import React, { useCallback, useState } from "react";
import { useAccordionButton } from "react-bootstrap";

const useHttp = () => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(nul);

  const sendRequest = useCallback(
    async (body = null, config) => {
      try {
        setLoading(true);

        const res = await axios({
          url: url,
          method: url.method,
          data: url.body,
          ...config,
        });

        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  console.log("user data", data);

  return {
    data,
    loading,
    error,
    sendRequest,
  };
};

export default useHttp;
