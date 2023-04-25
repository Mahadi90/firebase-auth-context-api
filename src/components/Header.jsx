import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";

const Header = () => {

 const {user, logout} = useContext(AuthContext)

 const handleLogOut = () =>{
  logout()
  .then(result => {})
  .catch(error => {
    console.log(error)
  })
 }
  return (
    <div>
      <nav className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div className="mx-auto">
          <Link className="mx-2" to='/'>Home</Link>
          <Link className="mx-2" to='/register'>Register</Link>
          <Link className="mx-2" to='/login'>Login</Link>
          <Link className="mx-2" to='/order'>Orders</Link>
        </div>
        <div className="ms-auto bg-red-500 p-3 rounded">
         {
          user ? <div>
           <span>{user.email}</span>
           <button onClick={handleLogOut} className="mx-5">Sign Out</button>  </div> :
           <Link className="mx-5" to='/login'>Login</Link>
         }
        </div>
      </nav>
    </div>
  );
};

export default Header;
