import { Route, Routes } from "react-router-dom";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";

export default function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowSubscriber />} />
        <Route path="/add" element={<AddSubscriber />} />
      </Routes>
    </>
  );
}
