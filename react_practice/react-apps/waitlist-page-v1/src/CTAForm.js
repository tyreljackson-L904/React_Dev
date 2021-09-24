import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import "./CTAForm.css";

function CTAForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert("you clicked submit " + value);
    e.preventDefault();
  };

  const handleKeyPress = (e) => {
    if (e.key === 13) {
      handleSubmit();
    }
  };

  return (
    <div className="cta-form">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="cta-join-header">Join The Waitlist</h2>
        <h2 className="cta-description">
          The best creator <span>discounts</span> will only be a simple search
          away
        </h2>
        {/* <h4 className="cta-search">
              <span>Search</span> all your favorite creators from the social
              platforms they love
            </h4>
            <h4 className="cta-shop">
              <span>Shop</span> all the brands they work with
            </h4>
            <h4 className="cta-save">
              <span>Save</span> big on all your favorite products
            </h4> */}
        <input
          type="text"
          size="35"
          placeholder="Email Address"
          className="cta-form-email"
          value={value}
          onChange={handleChange}
        />
        <div>
          <PrimaryBtn
            title="Join the waitlist"
            className="cta-form-btn"
            onKeyPress={handleKeyPress}
            handleSubmit={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default CTAForm;
