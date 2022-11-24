import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/14344662/pexels-photo-14344662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/6963605/pexels-photo-6963605.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com" target="_blank">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://instagram.com" target="_blank">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://twitter.com" target="_blank">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com" target="_blank">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com" target="_blank">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>jeetubangari.netlify.app</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
