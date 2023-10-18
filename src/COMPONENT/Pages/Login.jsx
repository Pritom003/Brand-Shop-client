import React, { useContext } from 'react';
import { AuthContext } from '../Layoutss/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  const{loginuser}=useContext(AuthContext)
const handlelogin=e=>{
 
  e.preventDefault()
  const form = e.target;
 
 const email = form.email.value;
 const password=form.password.value
const info={email,password}
console.log(info)
loginuser(email,password)
.then(res=>{
  console.log(res.user)
})
.catch(error=>{
  console.error(error)
})


}




  return (
    <div  className="hero min-h-screen bg-base-200">
      <div className=" grid gap-10 justify-center align-middle items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlelogin} className="card-body">

          

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p> New here ? <Link
             className='underline-offset-8  text-cyan-600 font-bold' to='/regi'>
        Register 
        
        </Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;