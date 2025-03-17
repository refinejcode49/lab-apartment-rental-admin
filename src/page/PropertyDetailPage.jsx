import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import listings from "../assets/listings.json";
import { PropertyDetail } from '../components/PropertyDetail';


export const PropertyDetailPage = () => {
    const {id} = useParams();
    const data = listings.results;

    const propertyDetail = data.find((property)=>property.id == id);
 
    return (
    propertyDetail !== undefined ? 
    <PropertyDetail propertyDetail={propertyDetail}/>
    : 
    <Navigate to="/pagenotfound"/>
  )
}
