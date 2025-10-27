import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Register Now!</h1>
        <form>
          <fieldset className="fieldset">
            {/* Email Feild */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            {/* Password Feild */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
              </form>
              <p>Already Have an Accoutn? Then <Link className="text-blue-500 hover:text-blue-800 hover:font-semibold" to={'/login'}>Login</Link> </p>
      </div>
    </div>
  );
};

export default Register;
