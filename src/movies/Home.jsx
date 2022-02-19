import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Details from "./Details";
import Login from "./Login";
import Movies from "./Movies";
import SignUp from "./SignUp";

export default function Home(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      navigate("/movies", { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id/:name" element={<Details />} />
    </Routes>
  );
}
