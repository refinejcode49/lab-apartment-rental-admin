import { useState } from "react";

const Property = (props) => {
    console.log(props);
    const [property, setProperty] = useState(props.oneApart);

    function handleDelete(id){
      props.delete(id);
    }
  return (
    <article id={property.id} className="card">
      <div className="image-container">
        <img src={property.picture_url} alt={property.name} className="image"/>
      </div>
      <div className="text-container">
        <h3 className="card-title">{property.name}</h3>
        <p>{property.description}</p>
        <p>Price by night : {property.price}</p>
        <button onClick={()=> {handleDelete(property.id)}}>Delete</button>
        {property.host_identity_verified && <span>Verified</span> }
      </div>
    </article>
  )
}
export default Property;
