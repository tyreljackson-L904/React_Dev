import React, { useState } from "react";
import PrimaryBtn from "./PrimaryBtn";
import "./CTAForm.css";

import axios from "axios";

const initialState = {
  fullName: "",
  email: "",
};

function CTAForm() {
  const [form, setForm] = useState(initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await axios.post("http://localhost:5002/record/add", {
        fullName: form.fullName,
        email: form.email,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
    setForm(initialState);
    setName("");
    setEmail("");
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
          <label htmlFor="fullName" className="cta-form__input-fields__label">
            Full Name
          </label>
          <input
            name="fullName"
            type="text"
            size="37"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
            required
          />
          <label htmlFor="email" className="cta-form__input-fields__label">
            Email Address
          </label>
          <input
            name="email"
            type="text"
            size="37"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
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
