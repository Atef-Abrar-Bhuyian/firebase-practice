import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useNavigate();
  const { loginUser, googleSignIn } = useContext(AuthContext);

  // Login Form Handle btn
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // User Login
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        location("/order");
      })
      .catch((error) => {
        console.log("ERROR", error.message);
      });
  };

  // Google Btn Handle
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        location("/profile");
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="mb-6 mt-0 text-center flex items-center flex-col gap-2">
            <p>Or Continue With</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-ghost border-white"
            >
              <FaGoogle />
            </button>
          </div>

          <p className="text-center mb-4">
            New To This Website? Please{" "}
            <Link className="font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
