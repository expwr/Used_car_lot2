import React, { useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged } 
  from "firebase/auth";
import {auth} from '../firebaseConfig'

function Account() {

  const [displayName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(
      auth, 
      displayName,
      registerEmail, 
      registerPassword
      );
    console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
    const user = await createUserWithEmailAndPassword(
      auth, 
      loginEmail,
      loginPassword
      );
    console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {

  }

  return (
    <div className="Account">
      <div className="Account-form">

      <h1 className="CurrentUser">User Logged in: {user.displayName}</h1>

        <div className="Account-register">
          <h1>Register Here!</h1>
          <input placeholder="Name:" onChange={(event) => {setRegisterName(event.target.value);
          }}/>
          <input placeholder="Email:" onChange={(event) => {setRegisterEmail(event.target.value);
          }}/>
          <input placeholder="Password:"onChange={(event) => {setRegisterPassword(event.target.value);
          }}/>
          <button className = "RegisterButton" onClick={register}>Create Account</button>
        </div>

        <div className="Account-login">
          <h1>Already Have an Account? Login Here!</h1>
          <input placeholder="Email:" onChange={(event) => {setLoginEmail(event.target.value);
          }}/>
          <input placeholder="Password:"onChange={(event) => {setLoginPassword(event.target.value);
          }}/>
          <button className = "LoginButton" onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Account;