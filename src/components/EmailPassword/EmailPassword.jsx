import React, { useContext, useRef, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";



const EmailPassword = () => {

  const {singIn , restPassword , setUser} = useContext(AuthContext);

  const [loginError , setLoginError] = useState('');
  const [success , setSuccess] = useState('');
  const emailRef = useRef();

  const handleLogIn = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email , password)
    .then(result => {
      const user = result.user;
      setSuccess("Login successfully")
      setLoginError('');
      event.target.reset();
      setUser(user)
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
      setSuccess("")
    })

    console.log()
  }

  const handleRestPassword = event =>{
    const email = emailRef.current.value;
      if(! email){
        alert("Please provide a email address for rest password");
        return;
      }
      restPassword(email)
      .then(() =>{
        alert("Please check your email and reset password")
      })
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
                  ref={emailRef}
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
                  <a onClick={handleRestPassword} className="label-text-alt link link-hover">
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
            <p className="text-center mb-5">No account yet ? Please <Link className="underline" to="/register">Sing up</Link></p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmailPassword;
