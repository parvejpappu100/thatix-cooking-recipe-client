import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProviders";

const auth = getAuth(app);

const Register = () => {

  const { createUser} = useContext(AuthContext)

  const [registerError , setRegisterError] = useState('');
  const [success , setSuccess] = useState('');

  const handleRegister = event =>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;
    // * validate:
    if(!/(?=.*[A-Z].*[A-Z])/.test(password) ){
      setRegisterError("Please add at least two upper case letter.")
      return;
    }
    else if(!/(?=.*[@$!%*?&])/.test(password)){
      setRegisterError('Password should be at least one special character')
      return;
    }
    else if (password.length < 6){
      setRegisterError('Please add at least 6 character in you password')
      return;
    }
    

    createUser(email , password)
    .then(result =>{
      const user = result.user;
      setSuccess("User has create successfully")
      setRegisterError('');
      event.target.reset();
      updateUserData(user , name , photo)
    })
    .catch(error => {
      console.log(error.message)
      setRegisterError(error.message)
      setSuccess('');
    })
  }

  const updateUserData = (user , name , photoUrl) =>{
    updateProfile(user , {
      displayName: name,
      photoURL: photoUrl
    })
    .then(() => {

    })
    .catch(error => {

    })
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <Form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phot URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Your photo url"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <p className="text-green-400 mb-3">{success}</p>
              <p className="text-red-500 mb-3 font-semibold">{registerError}</p>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="mt-4">Already have an account ? Please <Link className="underline" to='/login'>login</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
