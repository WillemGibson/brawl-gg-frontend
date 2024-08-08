import { useState, createContext, useContext } from "react";

const UserDataContext = createContext({
	UserJwt: "",
	decodedJwt: {},
});

const UserDispatchContext = createContext({
	makeSignupRequest: () => {},
	makeLoginRequest: () => {},
	makeForgotPasswordRequest: () => {},
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

  const makeSignupRequest = async (username, email, password) => {
    try {
      const bodyData = { username, email, password };
      const response = await fetch(
        "https://brawl-gg-backend.onrender.com/signup",
        {
          method: "POST",
          body: JSON.stringify(bodyData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const signUpResult = await response.json();
      setUserJwt(signUpResult.jwt);
      setDecodedUserJwt(signUpResult.decodedJwt);
    } catch (error) {
      console.error(error);
    }
  };

  const makeLoginRequest = async (email, password) => {
    try {
      const response = await fetch("https://brawl-gg-backend.onrender.com/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

	  if (!response.ok) {
		if (response.status == 401) {
			throw new Error('Account not found');
		} if (response.status == 400) {
      throw new Error ('Incorrect details')
    } else {
			throw new Error('Error occurred while logging in');
		}
	  }

      const loginResult = await response.json();
      setUserJwt(loginResult.jwt);
      setDecodedUserJwt(loginResult.decodedJwt);
    } catch (error) {
      throw error;
    }
  };

  const makeForgotPasswordRequest = async (email) => {
    try {
      const bodyData = { email };
      const response = await fetch(
        "https://brawl-gg-backend.onrender.com/login/forgot-password",
        {
          method: "POST",
          body: JSON.stringify(bodyData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const forgotPasswordResult = await response.json();
      console.log(forgotPasswordResult);
      return forgotPasswordResult;
    } catch (error) {
      throw error;
    }
  };

  return (
	<UserDataContext.Provider value={{ userJwt, decodedUserJwt }}>
	  <UserDispatchContext.Provider value={{ makeSignupRequest, makeLoginRequest, makeForgotPasswordRequest }}>
		{children}
	  </UserDispatchContext.Provider>
	</UserDataContext.Provider>
  );
}