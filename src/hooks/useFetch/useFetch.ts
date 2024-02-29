import axios, {AxiosResponse} from 'axios';
import {useEffect, useState} from 'react';

interface result<T> {
  error: any;
  loading: boolean;
  data: T | null;
}

const useFetch = <T>(url: string): result<T> => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  console.log(error);

  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {error, loading, data};
};

export default useFetch;
