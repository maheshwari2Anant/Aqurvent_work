import React from "react";
import { useState } from "react";
import Axios from "axios";
import "./SignUp.css";
import signupimg from "./images/signupimg.jpg";

function SignUp() {
  const times = new Date();
  let realtime = times.getUTCSeconds();
  const [NameReg, setNameReg] = useState("");
  const [EmailId, setEmail] = useState("");
  const [PasswordReg, setpasswordReg] = useState("");
  const [dobReg, setdobReg] = useState("");

  const register = () => {
    console.log(NameReg, PasswordReg, dobReg);
    Axios.post("http://localhost:3000/register", {
      Name: NameReg,
      // Username: UsernameReg,
      EmailId: EmailId,
      Password: PasswordReg,
      dob: dobReg,
      sec: realtime,
    })
      .then(() => {
        console.log("success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <img src={signupimg} className="img1" alt="signupimg" />
      <div class="signup">
        <h1 class="signup-heading">Sign up</h1>
        <a href="#" class="signup-google">
          <i class="fab fa-google signup-google-icon"></i>
          <span class="signup-google-text">Sign up with Google</span>
        </a>
        <div class="signup-or">
          <span class="signup-or-text">Or</span>
        </div>
        <form className="">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            value={NameReg}
            onChange={(e) => {
              setNameReg(e.target.value);
            }}
            id="Nname"
            name="Name"
            placeholder="Name"
          ></input>
          <br />
          <label htmlFor="Email Id"> Email Id</label>

          <input
            type="email"
            value={EmailId}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="uEmail"
            name="Email Id"
            placeholder="Email Id"
          ></input>
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={PasswordReg}
            onChange={(e) => {
              setpasswordReg(e.target.value);
            }}
            id="pname"
            name="Password"
            placeholder="Password"
          ></input>
          <br />

          <br />
          <button type="submit" className="button" onClick={register}>
            Register
          </button>
        </form>
        <p class="signup-already">
          Already have an account ?{" "}
          <a href="#" class="signup-already-link">
            Login
          </a>
        </p>
      </div>
    </>
  );
}

export default SignUp;
