import React from 'react'
import UserForm from '../components/users/UserForm';
import logo from '../assets/img/musicapp.png';

function RegisterPage() {
  return (
    <div className='h-auto w-full p-4 bg-gray-800 font-mono'>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="">
          <img
            className="mx-auto h-20 w-auto"
            src={logo}
            alt="Spotify logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Register your account
          </h2>
        </div>
      <UserForm />
      </div>
    </div>
  )
}

export default RegisterPage