import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import snapchat from "./images/snapchat.png";
import tiktok from "./images/tiktok.png";

function Header() {
  return (
    <div className="cta-header">
      <h2 className="cta-tagline">
        Search. Shop. Save. <br /> with <span>Creators</span>
      </h2>
      <div className="images">
        <img src={twitter} alt="twitter" />
        <img src={youtube} alt="twitter" />
        <img src={facebook} alt="twitter" />
        <img src={instagram} alt="twitter" />
        <img src={snapchat} alt="twitter" />
        <img src={tiktok} alt="twitter" />
      </div>
    </div>
  );
}

export default Header;
