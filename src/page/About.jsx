import { Link } from "react-router-dom";
import imageRonan from "../assets/profile-5.png";
import imageJennifer from "../assets/profile-7.png";

export const About = () => {
  return (
    <div className="about">
      <div className="project-description">
        <h2 className="title">Projet description</h2>
        <p>
          Admin dashboard for the apartment rental platform where the admin can
          see and manage the apartments shown on the platform.
        </p>
      </div>
      <div className="team-info">
        <div className="ronan">
          <h2 className="name-team">Ronan CANNY </h2>
          <img src={imageRonan} />
          <Link to="https://github.com/CannyRo">
            <button className="about-btn">Github</button>
          </Link>
        </div>
        <div className="jennifer">
          <h2 className="name-team">Jennifer MERAT</h2>
          <img src={imageJennifer} />
          <Link to="https://github.com/refinejcode49">
            <button className="about-btn">Github</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
