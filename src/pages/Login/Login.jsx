import React from "react";
import { FaGithub , FaGoogle , FaVoicemail} from "react-icons/fa";
import { Link } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import app from "../../firebase/firebase.config";

const Login = () => {

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () =>{
    signInWithPopup(auth , googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const handleGithubSingIn = () =>{
    signInWithPopup(auth , githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <button onClick={handleGithubSingIn} className="flex items-center gap-4 border border-black rounded-md font-bold px-10 py-5 text-xl my-5">
                <span><FaGithub></FaGithub></span>
                <span>Login with GitHub</span>
              </button>
              <button onClick={handleGoogleSingIn} className="flex items-center gap-4 border border-black rounded-md font-bold px-10 py-5 text-xl my-5">
                <span><FaGoogle></FaGoogle></span>
                <span>Login with Google</span>
              </button>
              <button className="flex items-center gap-4 border border-black rounded-md font-bold px-10 py-5 text-xl my-5">
                <span><FaVoicemail></FaVoicemail></span>
                <span>Login with Email/Password</span>
              </button>
              <p className="text-center">No account yet ? Please <Link className="underline" to="/register">Sing up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
