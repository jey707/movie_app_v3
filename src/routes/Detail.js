import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../css/Detail.css";
import Detail_com from "../component/Detail_com";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  // console.log("id", id);

  const apiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true`;
  const getMovie = async () => {
    const json = await (await fetch(apiUrl)).json();
    if (json.data.movie.id === 0) {
      navigate("/");
    }
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <Detail_com
      title={movie.title}
      poster={movie.medium_cover_image}
      scr_im1={movie.medium_screenshot_image1}
      scr_im2={movie.medium_screenshot_image2}
      scr_im3={movie.medium_screenshot_image3}
      genres={movie.genres}
      rating={movie.rating}
      runtime={movie.runtime}
      year={movie.year}
      description={movie.description_full}
    />
  );
}

export default Detail;
