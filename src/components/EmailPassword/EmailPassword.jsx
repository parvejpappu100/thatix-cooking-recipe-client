import React, { useState } from "react";
import { Form } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);


const EmailPassword = () => {

  const [loginError , setLoginError] = useState('');
  const [success , setSuccess] = useState('');

  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth , email , password)
    .then(result => {
      const user = result.user;
      setSuccess("Login successfully")
      setLoginError('');
      event.target.reset();
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
      setSuccess("")
    })

    console.log()
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <Form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-green-400">{success}</p>
              <p className="text-red-400">{loginError}</p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
