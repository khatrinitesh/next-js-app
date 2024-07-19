import React, { useState } from "react";

const PwdValidation = () => {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="password">Password</label>
        <input
          className="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <ul className="valid-password">
          <li
            className={
              password.length >= 8 && password.length <= 20
                ? "valid"
                : "invalid"
            }
          >
            Must be between 8 and 20 characters long.
          </li>
          <li className={/(?=.*[a-z])/.test(password) ? "valid" : "invalid"}>
            Must contain at least one lowercase letter.
          </li>
          <li className={/(?=.*[A-Z])/.test(password) ? "valid" : "invalid"}>
            Must contain at least one uppercase letter.
          </li>
          <li className={/(?=.*\d)/.test(password) ? "valid" : "invalid"}>
            Must contain at least one number.
          </li>
          <li
            className={/(?=.*[!@#$%^&*])/.test(password) ? "valid" : "invalid"}
          >
            Must contain at least one special character.
          </li>
        </ul>
      </form>
    </>
  );
};

export default PwdValidation;
