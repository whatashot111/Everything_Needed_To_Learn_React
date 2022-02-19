import { useEffect, useState } from "react";
import { getPosts } from "./common/api";

export default function usePosts() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((response) => setNews(response))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return [news, loading];
}
