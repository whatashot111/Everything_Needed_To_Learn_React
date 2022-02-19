import { Route, Routes } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import Posts from "./Posts";

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}
