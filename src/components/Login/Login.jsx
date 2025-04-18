import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
      });
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out done");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //if user exists ? singOut : sing in

  return (
    <div>
      {/* <button onClick={handleGoogleSingIn}>Login with Google</button>
      <button onClick={handleSingOut}>Sing Out</button> */}

      {user ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSingIn}>Login with Google</button>
          <button onClick={handleGithubSingIn}>Login with Github</button>
        </div>
      )}

      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
