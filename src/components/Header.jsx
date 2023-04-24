import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div className="ms-auto">
          <Link className="mx-2" to='/'>Home</Link>
          <Link className="mx-2" to='/register'>Register</Link>
          <Link className="mx-2" to='/login'>Login</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
