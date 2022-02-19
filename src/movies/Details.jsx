import { Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import { identifyMovieUsingId } from "./common/moviesData";
import TheHeader from "./TheHeader";

export default function Details(props) {
  const params = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/movies", { replace: true });
  }

  const movie = identifyMovieUsingId(params.id);

  return (
    <>
      <TheHeader heading={params.name} />
      <Button
        onClick={handleClick}
        style={{ margin: "16px" }}
        color="secondary"
        variant="contained"
      >
        Search Another Movie
      </Button>
      <div className="movie-details">
        <div>
          <h2>{movie.title}</h2>
          <img src={movie.poster_url} />
          <p>
            Critics Rating: {movie.critics_rating}, {movie.censor_board_rating}
          </p>
          <h3>Synopsis</h3>
          <p>{movie.storyline}</p>
        </div>
        <div>
          <h2>Trailer</h2>
          <iframe
            width="900"
            height="506"
            src={movie.trailer_url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
