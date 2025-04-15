import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

  return (
    <div>
      <button onClick={handleGoogleSingIn}>Login with Google</button>
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
