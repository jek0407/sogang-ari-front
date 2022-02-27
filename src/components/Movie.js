import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, year, rating, coverImg, summary, genres }) {
  return (
    <div className={styles.movie}>
      <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
        <img src={coverImg} alt="Poster" className={styles.movie__img} />
      </Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link>
        </h2>
        <h5 className={styles.movie__year}>
          {year} ({rating} / 10.0)
        </h5>
        <p className={styles.movie__summary}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>
            {summary.length < 10
              ? "No description."
              : summary.length > 235
              ? `${summary.slice(0, 235)}...`
              : summary}
          </Link>
        </p>
        <h6>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>Details</Link>
        </h6>
        {/* <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li>{genre}</li>
          ))}
        </ul> */}
      </div>
      {/* <hr /> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number,
  rating: PropTypes.number,
  coverImg: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
