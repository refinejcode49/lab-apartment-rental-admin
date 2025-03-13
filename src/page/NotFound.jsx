import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div>
        <div>404 NotFound...</div>
        <Link to="/">Go Back Home</Link>
    </div>
  );
};
