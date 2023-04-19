import React from "react";
import "./signup.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Image from "../../images/backround-image.png";
import BlogImg from "../../images/blogsc.png";

const firstNameRegex = /^[A-Z]{1,1}[a-z]{3,30}$/;
const lastNameRegex = /^[a-z[A-Z]{3,30}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^[a-z]{1,3}[A-Z]{1,1}[0-9]{1,4}$/;

function Signup(props) {
  console.log(props);
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

  const takefirstname = (fname) => {
    setSigupObj((prevState) => ({
      ...prevState,
      firstName: fname.target.value,
    }));
  };
  const takelastname = (lname) => {
    setSigupObj((prevState) => ({
      ...prevState,
      lastName: lname.target.value,
    }));
  };
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

  const clickSignin = () => {
    props.listenToSignUpPage();
  };
  return (
    <div className="main-body" style={{ backgroundImage: `url(${Image})` }}>
      <div className="signup-box">
        <div className="header">
          <h3 style={{ color: "blue" }}>Create Blog Account</h3>
          <div className="signin-link">
            <div>
              <Button onClick={clickSignin}> Sign in </Button>
            </div>
            <div style={{ marginBottom: "6px" }}>instead?</div>
          </div>
        </div>
        <div className="text-field">
          <text style={{ width: "100%" }}>
            <b>
              <p style={{ fontSize: "15px" }}>
                Publish your passions, your way
              </p>
            </b>
            <p>Create a unique and beautiful blog easily.</p>
          </text>
        </div>

        <div className="signup-form">
          <div className="first-name">
            <TextField
              id="standard-basic"
              label="FirstName"
              variant="standard"
              onChange={takefirstname}
              error={errorObj.firstNameError}
              helperText={errorObj.firstNameHelper}
              style={{ width: "100%", height: "80%" }}
            />
          </div>
          <div className="last-name">
            <TextField
              id="standard-basic"
              label="LastName"
              variant="standard"
              onChange={takelastname}
              error={errorObj.lastNameError}
              helperText={errorObj.lastNameHelper}
              style={{ width: "100%", height: "80%" }}
            />
          </div>
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
          <div className="signup-block">
            <Button
              onClick={submit}
              variant="contained"
              style={{
                padding: "11px 0px",
                fontSize:"10px",
                marginRight: "10px",
                marginBottom: "30px",
                backgroundImage: "linear-gradient(to right, #08CCFD, #0379FD)",
              }}
            >
              signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
