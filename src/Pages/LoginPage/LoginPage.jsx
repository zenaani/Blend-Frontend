import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

const LoginPage = () => {
  const { setUserId, userId } = useContext(UserContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

      axios
        .post("http://localhost:8080/user", {
          userName: userName,
          name: fullName,
          email: registerEmail,
          profilePicture: null,
        })
        .then((response) => console.log(response));
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);

      axios
        .get(`http://localhost:8080/user/email/${loginEmail}`)
        .then((data) => {
          console.log(data.data.userId);
          setUserId(data.data.userId);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      LoginPage
      <div className="m-10">
        <div>Register</div>
        <input
          placeholder="Full Name"
          type="text"
          onChange={(event) => {
            setFullName(event.target.value);
          }}
        ></input>

        <input
          placeholder="User Name"
          type="text"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        ></input>

        <input
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        ></input>

        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={register}>
          Create User
        </button>
      </div>
      <div className="m-10">
        <div>Login</div>
        <input
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        ></input>

        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        ></input>

        <button type="submit" onClick={login}>
          Login
        </button>
      </div>
      <div className="m-10">
        <div>Use Logged in : {user?.email}</div>
        <button onClick={logout}>Sign out</button>
        <div>Imported Successfully {userId}</div>
      </div>
    </div>
  );
};

export default LoginPage;
