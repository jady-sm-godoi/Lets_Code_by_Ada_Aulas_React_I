import "./style.css";
import PropTypes from "prop-types";

export const Profile = ({ name, email, img }) => {
  return (
    <div className="card-container">
      <img src={img} alt="avatar imagem" />
      <div className="card-text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  img: PropTypes.string,
};
