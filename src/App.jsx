import { useState } from 'react'
import './App.css'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

function App() {
  const [user, setUser] = useState(null)
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <>

      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && <div className="card">
        <h2>User Name: {user.displayName}</h2>
        <img src={user.photoURL} alt="" />
      </div>}
    </>
  )
}

export default App
