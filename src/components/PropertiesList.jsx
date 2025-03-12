import listings from "../assets/listings.json";
import Property from "./Property";
import { useState } from "react";

export const PropertiesList = () => {
  console.log(listings.results.length);
  const [list, setList] = useState(listings.results);
  function handleDelete(theApartId) {
    const filteredList = listings.results.filter((apart) => apart.id !== theApartId);
    setProperty = filteredList;
}

  return (
    list.map((oneApart)=>{
      return (
        <Property key={oneApart.id} oneApart={oneApart}/>
      )
    })
  )
}

