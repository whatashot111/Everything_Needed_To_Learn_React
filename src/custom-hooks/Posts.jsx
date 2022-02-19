import { CircularProgress } from "@mui/material";
import usePosts from "./usePosts";

export default function Posts() {
  const [news, loading] = usePosts();

  if (loading) {
    return <div>{<CircularProgress color="error" />}</div>;
  }

  return (
    <>
      <h2>Posts</h2>
      <div>
        {news.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </>
  );
}
