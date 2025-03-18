import superHostIcon from "../assets/web-awesome-icon.svg";
import hostVerified from "../assets/user-check-icon.svg";
import editIcon from "../assets/pen-to-square-icon.svg";
import deleteIcon from "../assets/trash-icon.svg";
import { useNavigate } from "react-router-dom";

export const PropertyDetail = ({ propertyDetail, data, setData }) => {
  let navigate = useNavigate();

  function handleDelete(theApartId) {
    const filteredList = data.filter((apart) => apart.id !== theApartId);
    setData(filteredList);
    navigate("/");
  }
  return (
    <div className="detail-container">
      <section className="detail-title-container">
        <h2 className="detail-title">{propertyDetail.name}</h2>
      </section>
      <section className="detail-image-container">
        <img
          src={propertyDetail.picture_url}
          alt={propertyDetail.name}
          className="detail-image"
        />
      </section>
      <section className="detail-info-container">
        <p className="detail-info-type">{propertyDetail.room_type}</p>
        <div className="detail-info-location">
          {propertyDetail.neighbourhood && (
            <p className="detail-info-location-item">
              {propertyDetail.neighbourhood}
            </p>
          )}
          {propertyDetail.neighbourhood &&
            propertyDetail.neighbourhood_group_cleansed && (
              <span className="detail-info-location-divider"> - </span>
            )}
          {propertyDetail.neighbourhood_group_cleansed && (
            <p className="detail-info-location-item">
              {propertyDetail.neighbourhood_group_cleansed}
            </p>
          )}
          {(propertyDetail.neighbourhood ||
            propertyDetail.neighbourhood_group_cleansed) && (
            <span className="detail-info-location-divider"> - </span>
          )}
          {propertyDetail.neighbourhood_cleansed && (
            <p className="detail-info-location-item">
              {propertyDetail.neighbourhood_cleansed}
            </p>
          )}
        </div>
        <div className="detail-info-acommodates">
          {propertyDetail.accomodates !== null &&
          propertyDetail.accomodates > 1 ? (
            <p>{propertyDetail.accommodates} guests</p>
          ) : (
            <p>{propertyDetail.accommodates} guest</p>
          )}
          {propertyDetail.bedrooms !== null && propertyDetail.bedrooms > 1 ? (
            <p>{propertyDetail.bedrooms} bedrooms</p>
          ) : (
            <p>{propertyDetail.bedrooms} bedroom</p>
          )}
          {propertyDetail.beds !== null && propertyDetail.beds > 1 ? (
            <p>{propertyDetail.beds} beds</p>
          ) : propertyDetail.beds !== null ? (
            <p>{propertyDetail.beds} bed</p>
          ) : null}
          {propertyDetail.bathrooms_text && (
            <p>{propertyDetail.bathrooms_text}</p>
          )}
        </div>
      </section>
      <section className="detail-host-container">
        <div className="detail-host-card">
          <div className="detail-host-card-col-60">
            <h3 className="detail-host-title">{propertyDetail.host_name}</h3>
            <p>Host since {propertyDetail.host_since}</p>
            {propertyDetail.host_location && <p>({propertyDetail.host_location})</p>}
          </div>
          <div className="detail-host-card-col-40">
            {propertyDetail.host_identity_verified && (
            <div className="detail-host-tag">
              <img src={hostVerified} alt="verified icon" className="icon" />
              <p className="detail-host-tag-text">Profile verified.</p>
            </div>
            )}
            {propertyDetail.host_is_superhost && (
            <div className="detail-host-tag">
              <img src={superHostIcon} alt="super host icon" className="icon" />
              <p className="detail-host-tag-text">Super host.</p>
            </div>
            )}
          </div>
        </div>
      </section>
      <section className="detail-description-container">
        {propertyDetail.description && (
          <p className="detail-description">{propertyDetail.description}</p>
        )}
        {propertyDetail.description && propertyDetail.neighborhood_overview && (
          <hr className="detail-description-divider"/>
        )}
        {propertyDetail.neighborhood_overview && (
          <p className="detail-description">
            {propertyDetail.neighborhood_overview}
          </p>
        )}
      </section>
      <section className="detail-price-container">
        <div className="detail-price-card">
          {propertyDetail.price && (
          <p className="detail-price">
            Price: <span className="bold">{propertyDetail.price}</span>
          </p>
          )}
          {propertyDetail.review_scores_rating && (
          <p className="detail-score">
            Score:{" "}
            <span className="bold">{propertyDetail.review_scores_rating}</span>
          </p>
          )}
        </div>
        
      </section>
      <section className="detail-tag-container">
        <h2 className="detail-tag-title">What is this place offers</h2>
        <div className="detail-tag-list">
          {propertyDetail.amenities.map((amenity) => (
            <span className="detail-tag">{amenity}</span>
          ))}
        </div>
      </section>
      <section className="detail-button-container">
        <div className="detail-button-layout">
          <p className="detail-button-title">Admin control panel</p>
          <div className="detail-button-group">
            <button className="detail-btn btn-success">
              <img src={editIcon} alt="edit icon" className="icon" />
              Edit
            </button>
            <button className="detail-btn btn-danger" onClick={()=>handleDelete(propertyDetail.id)}>
              <img src={deleteIcon} alt="delete icon" className="icon" />
              Delete
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
