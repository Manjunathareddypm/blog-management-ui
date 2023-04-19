import React, { useState } from "react";
import SignUp from "../signup/signup";
import Signin from "../signin/signin";
import Signup from "../signup/signup";


// import Main from "../../component/books/books";
// import Footer from "../../component/footer/footer";
// import Header from "../../component/header/header";
// import Books from "../../component/books/books";


function Dashboard() {
  const [toggles, setToggle] = useState(true);

  const listenToSignUpPage = () => {
    setToggle(false);
  };

  const listenToSigninPage = () => {
    setToggle(true);
  };
  return (
    <div>
      {/* <Header />
      <Books />
      <Footer /> */}
      <div>
        {toggles ? (
          <Signup listenToSignUpPage={listenToSignUpPage}  />
        ) : (
          <Signin listenToSigninPage={listenToSigninPage} />
        )}
       {/* <Signup listenToSignUpPage={listenToSignUpPage} /> */}
      </div>
    </div>
  );
}

export default Dashboard;