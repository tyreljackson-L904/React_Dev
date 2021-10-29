import "../css/Card.css";

const Card = ({ avatar, fName, lName }) => {
  return (
    <div className="card-container">
      <div className="top-section">
        <div className="avatar-circle">
          <img src={avatar} alt="profile-img" className="avatar" />
        </div>
        <h4 className="name">
          {fName} {lName}
        </h4>
        <div className="categories"></div>
      </div>

      {/* <div className="middle-section">
        <div className="following">
          <h4 className="following-text">Following</h4>
          <h4 className="following-count">918K</h4>
        </div>
        <div className="engagement">
          <h4 className="engagement-text">Avg. Engagement</h4>
          <h4 className="engagement-count">31K</h4>
        </div>
      </div> */}

      <div className="bottom-section">
        <div className="product-preview">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
