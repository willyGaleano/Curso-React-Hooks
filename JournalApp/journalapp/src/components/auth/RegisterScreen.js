import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const initialState = {
  name: "Willy",
  email: "willy@gmail.com",
  password: "123456",
  password2: "123456",
};

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { mgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm(initialState);

  const { name, email, password, password2 } = formValues;

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("email no es valido"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("NPassword no es igual o es menor a 5 caracteres"));
      return false;
    }

    dispatch(removeError());

    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form
        onSubmit={hanldeSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {mgError && <div className="auth__alert-error">{mgError}</div>}

        <input
          className="auth__input"
          type="text"
          autoComplete="off"
          placeholder="Name"
          name="name"
          onChange={handleInputChange}
          value={name}
        />

        <input
          className="auth__input"
          type="text"
          autoComplete="off"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange}
          value={password}
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          onChange={handleInputChange}
          value={password2}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
};
