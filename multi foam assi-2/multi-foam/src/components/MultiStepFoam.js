import React, { useState } from "react";
import "./MultiStepFoam.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
    password: "",
    address: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Next Step
  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  // Previous Step
  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Form Submitted Successfully!\n" + JSON.stringify(formData, null, 2));
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Multi Step Form</h2>

        {/* Progress Bar */}
        <div className="progress">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={step >= num ? "circle active" : "circle"}
            >
              {num}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 */}
          {step === 1 && (
            <div className="step">
              <h3>Personal Info</h3>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
              required
              />
              
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="step">
              <h3>Contact Info</h3>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="step">
              <h3>Address</h3>

              <textarea
                name="address"
                placeholder="Your Address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="step">
              <h3>Confirm Details</h3>

              <p><b>Name:</b> {formData.name}</p>
              <p><b>Email:</b> {formData.email}</p>
              <p><b>Phone:</b> {formData.phone}</p>
              <p><b>Address:</b> {formData.address}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="buttons">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="btn back">
                Back
              </button>
            )}

            {step < 4 && (
              <button type="button" onClick={nextStep} className="btn next">
                Next
              </button>
            )}

            {step === 4 && (
              <button type="submit" className="btn submit">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

