import logoTwitter from '../assets/x-twitter-icon.svg';
import logoInsta from '../assets/instagram-icon.svg';
import logoFacebook from '../assets/facebook-icon.svg';
import globeIcon from '../assets/globe-icon.svg';
import euroIcon from '../assets/euro-icon.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>© 2025 Rental Hack, Inc.</p>
        <ul className="footer-list">
          <li className="footer-list-item">Terms</li>
          <li className="footer-list-item">Sitemap</li>
          <li className="footer-list-item">Privacy</li>
          <li className="footer-list-item">Your Privacy Choices</li>
        </ul>
      </div>
     {/*<div className="footer-actions">
        <div className="language-container">
          <img src={globeIcon} alt="map icon" className="footer-icon"/>
          <select name="language" id="language" className="language">
            <option value="english" selected>
              English
            </option>
            <option value="french">Français</option>
            <option value="spanish">Español</option>
            <option value="german">Deutsch</option>
          </select>
        </div>
        <div className="currency-container">
          <img src={euroIcon} alt="currenty logo" className="footer-icon"/>
          <select name="currency" id="currency" className="currency">
            <option value="euro" selected>
              EUR
            </option>
            <option value="dollars">USD</option>
            <option value="sterling">GBP</option>
            <option value="german">Deutsch</option>
          </select>
        </div>
        <div className="network-container">
          <img src={logoFacebook} alt="facebook logo" className="footer-icon"/>
          <img src={logoTwitter} alt="x twitter logo" className="footer-icon"/>
          <img src={logoInsta} alt="instagram logo" className="footer-icon"/>
        </div>
      </div>*/}
    </footer>
  );
};
