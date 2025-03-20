import superHostIcon from "../assets/web-awesome-icon.svg";
import hostVerified from "../assets/user-check-icon.svg";
import editIcon from "../assets/pen-to-square-icon.svg";
import deleteIcon from "../assets/trash-icon.svg";
import availibilityTrueIcon from "../assets/square-check-icon.svg";
import availibilityFalseIcon from "../assets/square-xmark-icon.svg";
import { useNavigate } from "react-router-dom";

export const PropertyDetail = ({ propertyDetail, data, setData }) => {
  const navigate = useNavigate();

  async function  handleDelete(theApartId) {
    const filteredList = data.filter((apart) => apart.id !== theApartId);
    await setData(filteredList);
    navigate("/");
  }

  function handleEdit(propertyId){
    navigate(`/edit-property/${propertyId}`);
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
          {/* {propertyDetail.neighbourhood &&
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
          )} */}
        </div>
        <div className="detail-info-acommodates">
          {propertyDetail.accommodates !== null &&
          propertyDetail.accommodates > 1 ? (
            <p>{propertyDetail.accommodates} Guests</p>
          ) : (
            <p>{propertyDetail.accommodates} Guest</p>
          )}
          {propertyDetail.accommodates && (propertyDetail.bedrooms || propertyDetail.beds || propertyDetail.bathrooms_text) && 
            <span className="detail-info-location-divider"> - </span>
          }

          {propertyDetail.bedrooms !== null && propertyDetail.bedrooms > 1 ? (
            <p>{propertyDetail.bedrooms} Bedrooms</p>
          ) : (
            <p>{propertyDetail.bedrooms} Bedroom</p>
          )}

          {propertyDetail.bedrooms && (propertyDetail.beds || propertyDetail.bathrooms_text) && 
            <span className="detail-info-location-divider"> - </span>
          }

          {propertyDetail.beds !== null && propertyDetail.beds > 1 ? (
            <p>{propertyDetail.beds} Beds</p>
          ) : propertyDetail.beds !== null ? (
            <p>{propertyDetail.beds} Bed</p>
          ) : null}

          {propertyDetail.beds && propertyDetail.bathrooms_text && 
            <span className="detail-info-location-divider"> - </span>
          }

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

          <p className="detail-score">
            Score:{" "}
            {(propertyDetail.review_scores_rating && propertyDetail.review_scores_rating > 0) ?
              <span className="bold">{propertyDetail.review_scores_rating}</span>
              :
              <span className="bold">New</span>
            }
            
          </p>
        </div>
        
      </section>
      <section className="detail-tag-container">
        <h2 className="detail-tag-title">What is this place offers</h2>
        <div className="detail-tag-list">
          {propertyDetail.amenities && propertyDetail.amenities.length > 0 ? 
            propertyDetail.amenities.map((amenity, index) => (
            <span className="detail-tag" key={`amenity_n${index}`}>{amenity}</span>
            ))
            :
            <span className="detail-tag">No information</span>
          }
        </div>
      </section>
      <section className="detail-availabilities-containter">
        <div className="detail-availabilities-layout">
          <div className="detail-min-max-container">
            <p>Minimum nights : {propertyDetail.minimum_nights}</p>
            <p>Maximum nights : {propertyDetail.maximum_nights}</p>
          </div>
          <div className="detail-availabilities-now-container">
            {propertyDetail.instant_bookable == false && (
              <>
                <img src={availibilityFalseIcon} alt="Availability not checked" className="icon"/>
                No instant bookable
              </>
            )}
            {propertyDetail.instant_bookable && (
              <>
                <img src={availibilityTrueIcon} alt="Availability checked" className="icon"/>
                Instant bookable
              </>
            )}
          </div>
        </div>
      </section>
      <section className="detail-button-container">
        <div className="detail-button-layout">
          <p className="detail-button-title">Admin control panel</p>
          <div className="detail-button-group">
            <button className="detail-btn btn-success" onClick={()=>handleEdit(propertyDetail.id)}>
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
