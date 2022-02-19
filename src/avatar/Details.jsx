import { useParams } from "react-router-dom";

export default function Details(props) {
  const params = useParams();

  return (
    <>
      Welcome to the world of React !! {params.id}, {params.name};
    </>
  );
}
