import { createContext, useContext, useEffect, useState } from "react";
import axios from "./axios";
import { saveItem, retrieveItem, deleteItem } from "../utils/localStorageMethods";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async (email) => {
    try {
      const { data } = await axios.get(`/api/auth/user/${email}`);
      setUser(data.user);
    } catch (err) {
      console.log("User fetch failed", err);
      deleteItem("Email");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    const email = retrieveItem("Email");

    if (email) {
      fetchUser(email);
    } else {
      setLoading(false);
    }
  }, []);


  const login = (userData) => {
    saveItem("Email", userData.email);
    setUser(userData);
  };


  const logout = () => {
    deleteItem("Email");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);