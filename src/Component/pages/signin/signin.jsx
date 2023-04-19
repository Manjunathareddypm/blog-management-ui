import React from "react";
import "./signin.css";
import { Button, TextField } from "@mui/material";
import Image from "../../images/backround-image.png";

const firstNameRegex = /^[A-Z]{1,1}[a-z]{3,30}$/;
const lastNameRegex = /^[a-z[A-Z]{3,30}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^[a-z]{1,3}[A-Z]{1,1}[0-9]{1,4}$/;

function Signin(props) {
  console.log(props)
  const [signupObj, setSigupObj] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorObj, setErrorObj] = React.useState({
    firstNameError: false,
    firstNameHelper: "",
    lastNameError: false,
    lastNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  
  const takeEmail = (event) => {
    setSigupObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (e) => {
    setSigupObj((prevState) => ({ ...prevState, password: e.target.value }));
  };
  const submit = async () => {
    let firstnameTest = firstNameRegex.test(signupObj.firstName);
    let lastnameTest = lastNameRegex.test(signupObj.lastName);
    let emailTest = emailRegex.test(signupObj.email);
    let passwordTest = passwordRegex.test(signupObj.password);

    if (firstnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: true,
        firstNameHelper: "enter valid firstname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        firstNameError: false,
        firstNameHelper: "",
      }));
    }

    if (lastnameTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: true,
        lastNameHelper: "enter valid lastname",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        lastNameError: false,
        lastNameHelper: "",
      }));
    }

    if (emailTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "enter valid email",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "enter valid password",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }
    // if (firstnameTest === true && lastnameTest === true && emailTest === true && passwordTest === true) {
    //   let response = await signup(signupObj);
    //   console.log(response);
    //   console.log('User Signed Up Successfully...');
    //   return <Navigate to="/" />;
    // }
  };
  const clickSignup = () => {
    props.listenToSigninPage();
  };
  return (
    <div className="signin-main-page" style={{ backgroundImage: `url(${Image})` }}>
      <div className="login-page">
        <div className="login-header">
          <h4 style={{ fontSize: "18px", color: "blue" }}>Welcome to Blogs</h4>
          <div className="signup-link">
            <div>
              <Button onClick={clickSignup} > Sign up</Button>
            </div>
            <div>instead?</div>
          </div>
        </div>
        <div className="signin-form">
            <div className="email-id">
              <TextField
                id="standard-basic"
                label="EmailId"
                variant="standard"
                onChange={takeEmail}
                error={errorObj.emailError}
                helperText={errorObj.emailHelper}
                style={{ width: "100%", height: "80%" }}
              />
            </div>
            <div className="password">
              <TextField
                type={"password"}
                id="standard-basic"
                label="Password"
                variant="standard"
                onChange={takePassword}
                error={errorObj.passwordError}
                helperText={errorObj.passwordHelper}
                style={{ width: "100%", height: "80%" }}
              />
            </div>
            <div className="signin-block">
              <Button
                onClick={submit}
                variant="contained"
                style={{
                  marginTop:'10px',
                  marginRight: "10px",
                  backgroundImage:
                    "linear-gradient(to right, #08CCFD, #0379FD)",
                }}
              >
              signin
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Signin;
