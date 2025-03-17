import React from 'react'

export const PropertyDetail = ({propertyDetail}) => {
  return (
    <div className="detail-container">{propertyDetail.id}
      <img src={propertyDetail.picture_url} alt={propertyDetail.name} className="detail-image"/>
      <h2 className="detail-title">{propertyDetail.name}</h2>
      <p className="detail-description">{propertyDetail.description}</p>
      <hr />
      <p>Price: <span className="bold">{propertyDetail.price}</span></p>
      <p>Score: <span className="bold">{propertyDetail.review_scores_rating}</span></p>
    </div>
  )
}
