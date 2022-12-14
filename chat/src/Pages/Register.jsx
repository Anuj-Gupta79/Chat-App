import React from "react";
import profile from "../Image/Image_upload.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="Logo">Apne Log</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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

export default Register;
