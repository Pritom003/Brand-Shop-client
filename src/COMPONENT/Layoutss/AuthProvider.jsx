import React, { createContext, useState } from 'react';
import app from './firebase.config';
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}




  const userinfo={
    user,
    loading,
    createUser

  }

  return (
    <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;