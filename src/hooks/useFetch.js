import { useState, useRef, useEffect } from "react";

const baseUrl = "http://localhost:5000";

export default function useFetch(url, requestOptions) {
  const isMounted = useRef(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        if (requestOptions) {
          const response = await fetch(baseUrl + url, requestOptions);
          if (response.ok) {
            const json = await response.json();
            if (isMounted.current) setData(json);
          } else {
            const json = await response.json();
            throw json["message"];
          }
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }

    isMounted.current = true;
    setError(null);
    setLoading(true);
    init();

    return () => {
      isMounted.current = false;
    };
  }, [url, requestOptions]);

  return { data, error, loading };
}
