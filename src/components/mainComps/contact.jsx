import React, { useState } from "react";
import "../../mainComps/contact.css";
import contactImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/contactImg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend or API here
    console.log(formData);
  };

  return (
    <div className="contactWrap">
      <img className="contacatImg" src={contactImg} alt="" />
      <form className="contactForm" onSubmit={handleSubmit}>
        <h4 className="coteretContact">CONTACT US </h4>
        <h1 className="tatCoteretContact">Get in touch with me</h1>
        <div className="inputFullName">
          <input
            className="firstname"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />

          <input
            className="firstname"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <br />
        <input
          className="contactInput"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          className="contactInput"
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <br />
        <div className="contactButtons">
          {" "}
          <button type="submit" className="contactButton">
            Submit <span className="contactButtonSpan"></span> ➡
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
