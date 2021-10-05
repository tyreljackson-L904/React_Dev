import "../css/Card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div className="top-section">
        <div className="avatar-circle">
          <img src="" alt="" className="avatar" />
        </div>
        <h2 className="name">Tyrel Jackson</h2>
        <div className="categories"></div>
      </div>

      <div className="middle-section">
        <div className="following">
          <h2 className="following-text">Following</h2>
          <h2 className="following-count">918K</h2>
        </div>
        <div className="engagement">
          <h2 className="engagement-text">Avg. Engagement</h2>
          <h2 className="engagement-count">31K</h2>
        </div>
      </div>

      <div className="bottom-section">
        <div className="product-preview">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
