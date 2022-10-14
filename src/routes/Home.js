import { useEffect, useState } from "react";
import Movie_list from "../component/Movie_list";
import Loading from "../component/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?limit=20&page=1`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <section className="movie">
      {loading ? (
        <Loading />
      ) : (
        <div className="movie_list">
          {movies.map((movie) => (
            <Movie_list
              key={movie.id}
              id={movie.id}
              runtime={movie.runtime}
              year={movie.year}
              poster={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.hasOwnProperty("genres") ? movie.genres : ""}
            />
          ))}
        </div>
      )}
    </section>
  );
}
export default Home;
