import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [rateInput, setRateInput] = useState(false);
  const [movies, setMovies] = useState([]);
  const [rating, setRating] = useState("?");
  const [tmp, setTmp] = useState();

  const handleChange = (e) => {
    setTmp(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setRating(tmp);
      setRateInput(true);
    }
  };
  const onClick = () => {
    setRating(tmp);
    setRateInput(true);
  };
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  /* running one time */
  useEffect(() => {
    getMovies();
  }, [rating]);

  console.log(movies);
  return (
    <div className="App">
      <div className={styles.container}>
        <h1>
          The {movies.length} Recent Movies Rated Higher Than
          {<span className={styles.word}> {rating}</span>}
        </h1>
      </div>
      <div className={styles.container}>
        <p>
          - referenced on the <a href="https://yts.mx/">yts.mx</a>
          {"   | "}
          <strong>JK</strong>
        </p>
      </div>
      <div className={styles.container}>
        {rateInput ? (
          loading ? (
            <h3>Loading...</h3>
          ) : (
            <div>
              <div className={styles.movies}>
                {movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    year={movie.year}
                    rating={movie.rating}
                    coverImg={movie.medium_cover_image}
                    summary={movie.summary}
                    genres={movie.genres}
                  />
                ))}
              </div>
            </div>
          )
        ) : (
          <div>
            <br /> <br /> <br />
            <div className={styles.container}>
              <input
                type="search"
                id="search"
                value={tmp}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter the rate"
              />

              <button onClick={onClick}>GO</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
