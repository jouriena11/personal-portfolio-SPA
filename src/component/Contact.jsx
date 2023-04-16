import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = () => {
    if (!name) {
      return setErrorMessage("Please enter your name.");
    }

    if (email.length === 0) {
      return setErrorMessage("Please enter your email.");
    } else if (!validateEmail(email)) {
      return setErrorMessage(
        "Your email is not in a correct format. Please try again."
      );
    }

    if (!message) {
      return setErrorMessage("Please enter your message");
    }

    setErrorMessage("");
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else setMessage(inputValue);

    validateInputs();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateInputs) {
      return;
    }

    // TODO: replace alert with modal
    // TODO: to use nodemailer to send an email to personal gmail account
    
    alert("Thank you for contacting me. I will reply to you shortly.");

    setName("");
    setEmail("");
    setMessage("");
  };

  // TODO: to add Bootstrap card 
  // TODO: to add page title
  return (
    <div className="main-bg-img">
      <form className="px-5 py-3">
        <div className="mb-3">
          <label
            htmlFor="contact-form-name-input"
            className="form-label fw-bold"
          >
            Name
          </label>
          <div className="col-lg-3">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="contact-form-email-input"
            className="form-label fw-bold"
          >
            Email
          </label>
          <div className="col-lg-3">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="contact-form-message-input"
            className="form-label fw-bold"
          >
            Message
          </label>
          <div className="col-lg-6">
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              rows="10"
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="btn btn-info text-white fw-bold my-2"
        >
          Send
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="text-danger fw-bold mx-5 mb-4">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
