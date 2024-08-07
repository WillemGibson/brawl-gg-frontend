import { useState, createContext, useContext } from "react";

const UserDataContext = createContext({
	UserJwt: "",
	decodedJwt: {},
});

const UserDispatchContext = createContext({
	makeSignupRequest: () => {},
	makeLoginRequest: () => {},
});

export function useUserData() {
  return useContext(UserDataContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}

export default function UserProvider({ children }) {
  const [userJwt, setUserJwt] = useState("");
  const [decodedUserJwt, setDecodedUserJwt] = useState({});

  const makeSignupRequest = async (username, password) => {
    try {
      const bodyData = { username, password };
      const response = await fetch("https://brawl-gg-backend.onrender.com/signup", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const signUpResult = await response.json();
      setUserJwt(signUpResult.jwt);
      setDecodedUserJwt(signUpResult.decodedJwt);
    } catch (error) {
      console.error(error);
    }
  };

  const makeLoginRequest = async (username, password) => {
    try {
      const response = await fetch("https://brawl-gg-backend.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const loginResult = await response.json();
      setUserJwt(loginResult.jwt);
      setDecodedUserJwt(loginResult.decodedJwt);
    } catch (error) {
      console.error(error);
    }
  };

  return (
	<UserDataContext.Provider value={{ userJwt, decodedUserJwt }}>
	  <UserDispatchContext.Provider value={{ makeSignupRequest, makeLoginRequest }}>
		{children}
	  </UserDispatchContext.Provider>
	</UserDataContext.Provider>
  );
}