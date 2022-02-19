import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "./common/api";

export default function NewsLetter() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPosts()
      .then((response) => setNews(response))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>{<CircularProgress color="success" />}</div>;
  }

  return (
    <>
      <h2>News</h2>
      <Link to="/posts">Posts</Link>
      <div>
        {news.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </>
  );
}
