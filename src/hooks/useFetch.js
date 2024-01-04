import { toast } from "react-toastify";
import { useState, useEffect } from "react";

const useFetchData = (fetchFunction, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchFunction(id);
        console.log("res", res);
        const fetchedData = res?.data?.data;
        setData(fetchedData || {});
      } catch (err) {
        toast.error(err?.response?.data?.message || err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, id]);

  return { data, loading };
};

export default useFetchData;
