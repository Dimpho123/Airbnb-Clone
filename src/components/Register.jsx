import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { openModal } from "../actions/modalAction";
import "./Login.css";
import "./Register.css";

const Register = () => {
 const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const userRegister = useSelector(
    (state) => state.userRegister
  );

  const { loading, error, userInfo } =
    userRegister;

  useEffect(() => {
  if (userInfo) {
    setSuccess(true);

    setTimeout(() => {
      dispatch(openModal("open", "login"));
    }, 1500);
  }
}, [dispatch, userInfo]);

  const submitRegister = (e) => {
    e.preventDefault();

    dispatch(register(name, email, password));
  };


  return (
    <div className="login-form">
      <h2>Create Account</h2>

      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

 {success && (
  <div className="success-message">
    Registration successful! Please login.
  </div>
)}

      <form onSubmit={submitRegister}>
        <input
  type="text"
  placeholder="Full Name"
  className="browser-default"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        <input
          type="email"
          placeholder="Email Address"
          className="browser-default"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="browser-default"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="sign-up-button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;