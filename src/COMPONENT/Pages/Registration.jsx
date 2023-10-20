import React, { useContext, useState } from 'react';
import { AuthContext } from '../Layoutss/AuthProvider';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import {  FcGoogle} from "react-icons/fc";

const Registration = () => {
  const { createUser, creategooglesignup } = useContext(AuthContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [passerr, setpasserr] = useState(''); // Fix the state variable name here
  const [registererror, setregierror] = useState('');

  const handleregister = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^.{6,}$/.test(password)) {
      setpasserr('Password should be more than 6 characters');
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).*$/.test(password)) {
      setpasserr('Password should contain at least one capital letter and one special character');
    } else {
      setpasserr('');
      setpassword(password);
      setemail(email);

      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          updateProfile(res.user, {
            displayName: `${name}`,
            photoURL: `${photo}`,
          })
            .then((nameimg) => {
              console.log('success image', nameimg);
            })
            .catch((err) => {
              console.error(err, 'error img');
            });
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your registration was successful!',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'something went wrong',
            footer: '<a href=""> try again</a>',
          });
        });
    }
  };

  const handlegooglepop = () => {
    creategooglesignup()
      .then((res) => {
        console.log('user', res.user);
      })
      .catch((error) => {
        console.log('err', error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="  text-2xl lg:text-5xl font-bold">Registration now!</h1>
          <p className="lg:py-6 ">
            Welcome to{' '}
            <span
              className='font-bold'
              style={{
                background: 'linear-gradient(135deg, #7B64B6, #C898B9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              BrandBoulevard
            </span>
            
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-[350px] shadow-2xl bg-base-100">
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div>
                {passerr && <p className="text-red-600">{passerr}</p>}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary py-2" style={{ background: 'linear-gradient(135deg, #7B64B6, #C898B9)' }}>
                Register
              </button>
            </div>
            <p>
              Already have an account?
              <Link className="underline-offset-8 ml-4 text-cyan-600 font-bold" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="">
          <button
            onClick={handlegooglepop}
            className="flex shadow-2xl items-center justify-center py-12 md:py-24 px-2 md:px-10 border-purple-200 border-4 align-middle md:gap-2 text-sm md:text-xl font-bold"
          >
            Sign in with Google
            <div className='text-3xl'><FcGoogle></FcGoogle>
           </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
