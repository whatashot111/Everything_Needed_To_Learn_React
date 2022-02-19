import { Link, useNavigate } from "react-router-dom";
import moviesData from "./common/moviesData";
import "./common/movies.css";
import TheHeader from "./TheHeader";
import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

export default function Movies(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate("/", { replace: true });
    }
  }, []);

  const [text, setText] = useState("");

  const movies = moviesData;

  return (
    <>
      <TheHeader heading={"Movies"} />
      <div>
        <TextField
          style={{ margin: "16px", width: "90%" }}
          type="text"
          placeholder="Search Movie..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="movies-container">
        {moviesData
          .filter((movie) =>
            movie.title.toLowerCase().includes(text.toLowerCase())
          )
          .map((movie) => (
            <Link to={`/movies/${movie.id}/${movie.title}`} key={movie.id}>
              <div className="movie">
                <img src={movie.poster_url} />
                <div className="movie-title">
                  <h3>{movie.title}</h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
