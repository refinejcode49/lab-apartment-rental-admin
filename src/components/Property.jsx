const Property = (props) => {
    console.log(props);
    const [property, setProperty] = userState(props.oneApart);

    
  return (
    <article id={property.id} className="card">
      <div className="image-container">
        <img src={property.picture_url} alt={property.name} className="image"/>
      </div>
      <div className="text-container">
        <h3>{property.name}</h3>
        <p>{property.description}</p>
        <p>Price by night : {property.price}</p>
        <button onClick={()=> {handleDelete(property.id)}}>Delete</button>
        {property.host_identity_verified && <span>Verified</span> }
      </div>
    </article>
  )
}
export default Property;
