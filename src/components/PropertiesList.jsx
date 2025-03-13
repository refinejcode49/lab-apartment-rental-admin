import listings from "../assets/listings.json";
import Property from "./Property";
import { useState } from "react";

export const PropertiesList = () => {

  const [list, setList] = useState(listings.results);

  function handleDelete(theApartId) {
    const filteredList = list.filter(
      (apart) => apart.id !== theApartId
    );
    setList(filteredList);
  }

  return list.map((oneApart) => {
    return (
      <Property key={oneApart.id} oneApart={oneApart} delete={handleDelete} />
    );
  });
};
