import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React from "react";

const handleGoogleSingIn = () => {
  const provider = new GoogleAuthProvider();

  console.log("google coming soon");
};

const Login = () => {
  return (
    <div>
      <button onClick={handleGoogleSingIn}>Login with Google</button>
    </div>
  );
};

export default Login;
