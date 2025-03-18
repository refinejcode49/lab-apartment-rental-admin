import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import listings from "../assets/listings.json";
import { PropertyDetail } from '../components/PropertyDetail';


export const PropertyDetailPage = ({data, setData}) => {
    const {id} = useParams();
    const list = listings.results;

    const propertyDetail = list.find((property)=>property.id == id);
 
    return (
    propertyDetail !== undefined ? 
    <PropertyDetail propertyDetail={propertyDetail} data={data} setData={setData}/>
    : 
    <Navigate to="/pagenotfound"/>
  )
}
