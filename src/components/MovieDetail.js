import PropTypes from "prop-types";
import styles from "./Movie.module.css";

function MovieDetail({
  download,
  genres,
  like,
  title,
  rating,
  runtime,
  coverImg,
  summary,
}) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt="Poster" className={styles.movie__img2} />
      <div>
        <h1 className={styles.movie__title}>{title}</h1>
        <p className={styles.movie__rating}>rating : {rating} / 10.0</p>
        <p className={styles.movie__summary}>
          {summary.length < 10 ? "No description." : summary}
        </p>
        <hr />
        <div className={styles.movie__detail}>
          <ul>
            <h4>Genres</h4>
            {genres.map((genre) => (
              <li>{genre}</li>
            ))}
          </ul>
          <ul>
            <h4>Runtime</h4>
            <p>{runtime < 1 ? "?" : runtime} min</p>
          </ul>
          <ul>
            <h4>Downloads</h4>
            <p>{download}</p>
          </ul>
          <ul>
            <h4>Likes </h4>
            <p>{like}</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  download: PropTypes.number,
  like: PropTypes.number,
  runtime: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.number,
  rating: PropTypes.number,
  coverImg: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default MovieDetail;
