import "./Card.css";
import { FaSearchDollar } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <h1 className="title">1</h1>
        <FaSearchDollar size={"50"} />
        <h3 className="search-card">Search</h3>
        <h4 className="search-description">
          all your favorite <span>creators</span> from the platforms they love
        </h4>
      </div>
      <div className="card">
        <h1 className="title">2</h1>
        <GiShoppingBag size={"50"} />
        <h3 className="shop-card">Shop</h3>
        <h4 className="shop-description">
          all the <span>brands</span> they work with
        </h4>
      </div>
      <div className="card">
        <h1 className="title">3</h1>
        <GiReceiveMoney size={"50"} />
        <h3 className="save-card">Save</h3>
        <h4 className="save-description">
          big on your all your favorite <span>products</span>
        </h4>
      </div>
    </div>
  );
}

export default Card;
