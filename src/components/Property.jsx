const Property = (props) => {
    console.log(props);
  return (
    <div>{props.oneApart.id}{props.oneApart.name}</div>
  )
}
export default Property;
