import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Header from "../components/Header";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoggedIn, addAuthData, removeAuthData } = useAuth();

  const [loggedInError, setLoggedInMessage] = useState(undefined);

  const login = async ({ email, password, userType: type }) => {
    const res = await axios.post(
      "http://localhost:8080/api/v1/" + type + "/login",
      {
        email,
        password,
      }
    );

    if (!res.data.success) {
      setLoggedInMessage("Incorrect email or password!");
      return;
    }
    addAuthData({ email, token: res.data.token, type });
  };

  const logout = () => {
    removeAuthData();
    setLoggedInMessage(undefined);
  };

  if (isLoggedIn) {
    return (
      <>
        <Header />
        <p>
          You are logged in ! <a onClick={logout}>Click here</a> to log out
        </p>
      </>
    );
  }
  return (
    <>
      <Header />
      <div className="content">
        <div className="section group">
          <div className="row">
            <div className="col-md-6 reg">
              <form onSubmit={handleSubmit(login)} className="form-container">
                <input
                  {...register("email", { required: "Email id is required" })}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <br />
                <p
                  style={{
                    color: "red",
                  }}
                >
                  {errors.email?.message}
                </p>
                <br />
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum required length 8",
                    },
                  })}
                  type="password"
                  className="form-control"
                  placeholder="password"
                />
                <br />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
                <br />
                <select
                  placeholder="Select user type"
                  {...register("userType", {
                    validate: (value) => {
                      if (!value) return false;
                      return true;
                    },
                  })}
                >
                  <option value="">-----</option>
                  <option value="faculties">Faculty Member</option>
                  <option value="students">Student</option>
                </select>
                <br />
                <p style={{ color: "red" }}>{errors.userType?.message}</p>
                <p style={{ color: "red" }}>{loggedInError}</p>
                <br />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Log in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
