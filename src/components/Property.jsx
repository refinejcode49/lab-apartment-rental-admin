import { Link } from "react-router-dom";
import locationIcon from "../assets/location-dot-icon.svg";
import deleteIcon from "../assets/trash-icon.svg";

const Property = ({ oneApart, deleteApart }) => {
  function handleLocalDelete(e) {
    e.stopPropagation();
    deleteApart(oneApart.id);
  }
  return (
    <div className="card-layout">
      <Link to={`/property/${oneApart.id}`}>
        <article id={oneApart.id} className="card">
          <div
            className="card-image-container"
            style={{ backgroundImage: `url(${oneApart.picture_url})` }}
          ></div>
          <div className="card-title-container">
            <h4 className="card-title">{oneApart.name}</h4>
            <div className="location">
              <img src={locationIcon} alt="location icon" className="icon" />
              {oneApart.neighbourhood !== null &&
              oneApart.neighbourhood !== undefined &&
              oneApart.neighbourhood !== ""
                ? oneApart.neighbourhood
                : oneApart.host_location
                ? oneApart.host_location
                : "Unknown"}
            </div>
          </div>
          <hr className="card-divider" />
          <div className="card-data-container">
            <p>
              Score:{" "}
              {oneApart.review_scores_rating &&
              oneApart.review_scores_rating > 0 ? (
                <span className="bold">{oneApart.review_scores_rating}</span>
              ) : (
                <span className="bold">New</span>
              )}
            </p>
            <p>
              Price: <span className="bold">{oneApart.price}</span>
            </p>
          </div>
          <hr className="card-divider" />
          <div className="card-host-container">
            <p className="card-host-name">
              Host: <span className="bold">{oneApart.host_name}</span>
            </p>
            <p className="card-host-from">(Since {oneApart.host_since})</p>
          </div>
        </article>
      </Link>
      <div className="btn-delete-container">
        <button className="btn-delete" onClick={handleLocalDelete}>
          <img src={deleteIcon} alt="delete icon" className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Property;
