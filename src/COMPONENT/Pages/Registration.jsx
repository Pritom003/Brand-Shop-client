import React, { useContext } from 'react';
import { AuthContext } from '../Layoutss/AuthProvider';

const Registration = () => {
  const{createUser}=useContext(AuthContext)
const handleregister=e=>{
 
  e.preventDefault()
  const form = e.target;
  const photo=form.photo.value
  const name = form.name.value;
 const email = form.email.value;
 const password=form.password.value
const info={photo,email,name,password}
console.log(info)
createUser(email, password)
.then(res=>{
  console.log(res.user)
})
.catch(err=>{
  console.log(err)
})


}




  return (
    <div  className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleregister} className="card-body">

          <div className="form-control">
              <label className="label">
                <span className="label-text">photo</span>
              </label>
              <input type="photo" name='photo' placeholder="photourl" className="input input-bordered" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
            </div>

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
              <button className="btn btn-primary">Registration</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
