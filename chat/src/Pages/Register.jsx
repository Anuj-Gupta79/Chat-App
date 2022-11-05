import React from "react";
import profile from "../Image/Image_upload.png";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="Logo">Apne Log</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={profile}></img>
            <span>Add Profile Picture</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};
