import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../../../components/ActiveLink/ActiveLink";
import { AuthContext } from "../../../providers/AuthProviders";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  let { user, userSingOut , setUser } = useContext(AuthContext);
  

  const handleSingOut = () => {
      userSingOut()
      .then((result) => {
        setUser(null)
        
      })
      .catch((error) => {
        
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 lg:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/error">ErrorPage</ActiveLink>
              </li>
            </ul>
          </div>
          <a href="/" className=" italic font-semibold normal-case text-xl">
            ThatixCooking
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/error">ErrorPage</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">

            {
              user ? 
                <div className="flex items-center gap-3">
                  <div className="tooltip  tooltip-left" data-tip={user.displayName}>
                    {
                      user.photoURL ? <img className="rounded-full h-12 w-12" src={user.photoURL}></img> : <FaUserCircle className="h-12 w-12"></FaUserCircle> 
                    } 
                  </div>
                  <button onClick={handleSingOut} className="btn btn-warning normal-case text-base">
                    Log Out 
                  </button>
                </div> : 
                <div className="flex items-center gap-3">
                  <Link to="/login" className="btn btn-warning normal-case text-base">Login</Link>
                </div>
             
            }
        </div>
      </div>
    </div>
  );
};

export default Header;
