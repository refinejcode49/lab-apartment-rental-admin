import React from 'react'
import { Link } from 'react-router-dom'
import imageJennifer from "../assets/profile-7.png"

export const About = () => {
  return (
    <div className="about">
        <h2>About</h2>
    <div className="project-description">
      <h2>Projet description</h2>
        <p>Admin dashboard for the apartment rental platform where the admin can see and manage the apartments shown on the platform.</p>
    </div>
    <div className="team-info">
      <h2>Information about the team</h2>
        <div className="ronan">
          <img/>
          <Link to="https://github.com/CannyRo">Github</Link>
        </div>
        <div className="jennifer">
          <img src={imageJennifer}/>
          <Link to="https://github.com/refinejcode49">Github</Link>
        </div>
    </div>
    </div>

  )
}
