import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
const auth = getAuth(app);
const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


const createUser=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
const creategooglesignup=()=>{
  setLoading(true)
  return signInWithPopup(auth, provider)
}
const loginuser=(email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}

const logout=()=>
{
  setLoading(true)
  return signOut(auth)
}
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,
   
   
   currentUser=>{
 
     console.log('user auth',currentUser)
     setUser(currentUser)
     setLoading(false)
 
   })
 return ()=>{
   unSubscribe()
 }
 },[])


  const userinfo={
    user,
    loading,
    createUser,
    loginuser,
    creategooglesignup,
    logout,
  
  }

  return (
    <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;