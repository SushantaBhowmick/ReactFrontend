import { useCookies } from "react-cookie";
import { useState } from "react";

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoggedIn, setLoggedIn] = useState(
    cookies.email && cookies.token && cookies.type
  );
  const removeAuthData = () => {
    for (const cookie of ["type", "email", "token"]) removeCookie(cookie);
    setLoggedIn(false);
  };
  const addAuthData = ({ email, token, type }) => {
    setCookie("email", email);
    setCookie("token", token);
    setCookie("type", type);
    setLoggedIn(true);
  };
  return {
    email: cookies.email,
    token: cookies.token,
    type: cookies.type,
    isLoggedIn,
    removeAuthData,
    addAuthData,
  };
};

export default useAuth;
