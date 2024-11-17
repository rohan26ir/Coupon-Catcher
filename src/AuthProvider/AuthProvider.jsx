import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/FirebaseInit.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  // console.log(user);
  

  // Create new user

  const createNewUser =(name, photoUrl , email, password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, name, photoUrl, email , password)
  }

  // Sign out
  const logOut = () =>{
    setLoading(true)
    return signOut(auth)
  }
  // sign in
  const logIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Update user profile
  const updateUserProfile = (updatedData) => {

    return updateProfile(auth.currentUser, updatedData)
  }

  const authInfo = {

    user,
    setUser,
    createNewUser,
    logOut,
    logIn,
    loading,
    updateUserProfile,
  }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return() =>{
      unsubscribe()
    }
  },[])



  return (
    <AuthContext.Provider value={authInfo}>
           {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;