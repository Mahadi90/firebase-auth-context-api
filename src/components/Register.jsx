import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div>
            <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Please Register !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
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
                  <p><small>Already have an account? Please<Link className='btn btn-active btn-link' to='/login'>Login</Link></small></p>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </form>
        </div>
    );
};

export default Register;