import { Route, Routes } from "react-router-dom";
import Avatar from "./Avatar";
import Details from "./Details";
import Home from "./Home";

export default function RouterContainer() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/avatar/:id/:name" element={<Details />} />
    </Routes>
  );
}
