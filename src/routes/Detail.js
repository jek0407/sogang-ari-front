import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <MovieDetail
          key={movie.id}
          summary={movie.description_full}
          download={movie.download_count}
          genres={movie.genres}
          like={movie.like_count}
          title={movie.title_long}
          rating={movie.rating}
          runtime={movie.runtime}
          coverImg={movie.large_cover_image}
        />
      )}
    </div>
  );
}

export default Detail;
