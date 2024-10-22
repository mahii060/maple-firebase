import { useState } from 'react'
import './App.css'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.config';

function App() {
  const [user, setUser] = useState(null)
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

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
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Sign out successfully');
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <>

      <h1>Firebase + React</h1>
      {
        user ? <button onClick={handleSignOut}>Sign Out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>
      }
      {user && <div className="card">
        <h2>User Name: {user.displayName}</h2>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </>
  )
}

export default App
