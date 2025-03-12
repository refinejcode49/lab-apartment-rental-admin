import listings from "../assets/listings.JSON";
import Property from "./Property";

export const PropertiesList = () => {
  const [list, setList] = useState(listings.result);

  return (
    list.map((oneApart)=>{
      return (
        <Property key={oneApart.id} oneApart={oneApart}/>
      )
    })
  )
}

