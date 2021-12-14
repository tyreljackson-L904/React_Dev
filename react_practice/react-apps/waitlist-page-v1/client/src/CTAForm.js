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
    setValue(e.target.value);
  };

  return (
    <div className="cta-form">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="cta-join-header">Be the first to know when we launch</h2>

        <h2 className="cta-description">
          The best creator <span>discounts</span> will only be a simple search
          away
        </h2>
        <input
          type="text"
          size="37"
          placeholder="Email Address"
          className="cta-form-email"
          value={value}
          onChange={handleChange}
          required
        />
        <PrimaryBtn
          title="Join the waitlist"
          className="cta-form-btn"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CTAForm;
