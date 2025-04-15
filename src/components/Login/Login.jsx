import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("Error", error);
        setUser(null);
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
        <button onClick={handleGoogleSingIn}>Login with Google</button>
      )}

      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
