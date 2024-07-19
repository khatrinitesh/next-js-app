import React, { useState } from "react";

const MultipleStepForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
  };

  const goToNextStep = () => {
    setStep(step + 1);
  };
  const goToPreviousStep  = () => {
    setStep(step - 1);
  };
  return (
    <>
      <div className="multi-step-form">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <h2>Step 1: Personal Information</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <button type="button" onClick={goToNextStep}>
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2>Step 2: Account Information</h2>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <button type="button" onClick={goToPreviousStep}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};


export default MultipleStepForm;