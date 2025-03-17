import { useState } from "react";
import { Link } from "react-router-dom";
import locationIcon from "../assets/location-dot-icon.svg";
import deleteIcon from "../assets/trash-icon.svg";

const Property = (props) => {
  const [property, setProperty] = useState(props.oneApart);

  function handleDelete(e) {
    e.stopPropagation();
    props.delete(property.id);
  }
  return (
    <div className="card-layout">
      <Link to={`/property/${property.id}`}>
        <article id={property.id} className="card">
          <div
            className="card-image-container"
            style={{ backgroundImage: `url(${property.picture_url})` }}
          >
            {/* <img
            src={property.picture_url}
            alt={property.name}
            className="image"
          /> */}
          </div>
          <div className="card-title-container">
            <h4 className="card-title">{property.name}</h4>
            <div className="location">
              <img src={locationIcon} alt="location icon" className="icon" />
              {property.neighbourhood}
            </div>
          </div>
          <hr className="card-divider" />
          <div className="card-data-container">
            <p>
              Score:{" "}
              <span className="bold">{property.review_scores_rating}</span>
            </p>
            <p>
              Price: <span className="bold">{property.price}</span>
            </p>
          </div>
          <hr className="card-divider" />
          <div className="card-host-container">
            {/* <div className="card-host-avatar" style={{ backgroundImage: `url(${property.host_url})` }}></div> */}
            <p className="card-host-name">
              Host: <span className="bold">{property.host_name}</span>
            </p>
            <p className="card-host-from">(Since {property.host_since})</p>
          </div>
        </article>
      </Link>
      <div className="btn-delete-container">
        <button className="btn-delete" onClick={handleDelete}>
          <img src={deleteIcon} alt="delete icon" className="icon" />
        </button>
      </div>
    </div>
  );
};
export default Property;
