import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import "./CTAForm.css";

const initialState = {
  fullName: "",
  email: "",
};

function CTAForm() {
  const [value, setValue] = useState("");
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.value]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email } = form;
    // setValue(e.target.value);

    // const submitEmail = async () => {
    //   const URL = 'localhost:5002/'
    // }
  };

  return (
    <div className="cta-form">
      <form action="" onSubmit={handleSubmit}>
        <h2 className="cta-join-header">Be the first to know when we launch</h2>

        <h2 className="cta-description">
          The best creator <span>discounts</span> will only be a simple search
          away
        </h2>
        <div className="cta-form__input-fields">
          <input
            type="text"
            size="37"
            placeholder="Full Name"
            value={value}
            onChange={handleChange}
          />
          <input
            type="text"
            size="37"
            placeholder="Email Address"
            value={value}
            onChange={handleChange}
            required
          />
        </div>
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
