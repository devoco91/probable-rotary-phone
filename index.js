import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="login-box bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4 fw-bold">Login</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Username"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-login w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login