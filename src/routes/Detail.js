import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClubDetail from "../components/ClubDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [club, setClub] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const getClub = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);
    setClub(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getClub();
  }, []);
  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ClubDetail
          key={club.id}
          summary={club.description_full}
          download={club.download_count}
          genres={club.genres}
          like={club.like_count}
          title={club.title_long}
          rating={club.rating}
          runtime={club.runtime}
          coverImg={club.large_cover_image}
        />
      )}
    </div>
  );
}

export default Detail;
