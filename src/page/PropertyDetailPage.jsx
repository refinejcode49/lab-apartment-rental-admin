import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { PropertyDetail } from "../components/PropertyDetail";

export const PropertyDetailPage = ({ data, setData }) => {
  const { id } = useParams();
  const propertyDetail = data.find((property) => property.id == id);

  return propertyDetail !== undefined ? (
    <PropertyDetail
      propertyDetail={propertyDetail}
      data={data}
      setData={setData}
    />
  ) : (
    <Navigate to="/pagenotfound" />
  );
};
