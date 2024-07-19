import React, { isValidElement, useState } from "react";

const CustomApp = () => {
  return (
    <>
      <FormWithValidation />
    </>
  );
};

export default CustomApp;

const FormWithValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState("");
  const [showSnackbar, setShowsnackbar] = useState(false);


//   changed
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


//   submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // form is valid, proceed with submission
      console.log("form submitted", formData);
      setShowsnackbar(true); // show success message
      setFormData({ name: "", email: "", message: "" }); // reset for fields
    } else {
      // form is invalid, display validation errors
      setErrors(validationErrors);
    }
  };


//   form validated
  const validateForm = (data) => {
    const errors = {};
    // 1 validate name
    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    // 2 validate email
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }

    // 3 validate message
    if (!data.message.trim()) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md"
        >
          <h2 className="text-2xl mb-4 text-center">Contact Us</h2>

          {/* FIELD INPUT 1 */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border border-gray-300 rounded-md px-3 py-2 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* FIELD INPUT 2 */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border border-gray-300 rounded-md px-3 py-2 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* FIELD INPUT 3 */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border border-gray-300 rounded-md px-3 py-2 ${
                errors.message ? "border-red-500" : ""
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
        {showSnackbar && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-md">
            Form submitted successfully!
          </div>
        )}
      </div>
    </>
  );
};
