import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Please Login !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <p><small>Are you new here? Please<Link className='btn btn-active btn-link' to='/register'>Register</Link></small></p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Login;