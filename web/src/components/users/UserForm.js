import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import usersService from '../../services/users';
import { useNavigate, Link } from 'react-router-dom';

function UserForm() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);
  const navigate = useNavigate();

  const onUserSubmit = async (user) => {
    try {
      setServerError(undefined)
      user = await usersService.create(user)
      navigate('/login')
    } catch(error) {
      const errors = error.response?.data?.errors
      if (errors) {
        Object.keys(errors)
        .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm" >
      <form onSubmit={handleSubmit(onUserSubmit)} className="space-y-6">
        {serverError && <div className="p-3 text-red-600 bg-red-200 animate-pulse rounded-lg border-red-900"> {serverError} </div>}
        <div className="block text-sm font-medium leading-6 text-gray-200">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-200">Your email</label>
            <input 
              type="email"
              className="mt-6 p-2 block w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
              {...register('email', {
                required: 'Email is requried.',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Email must be valid'
                }
            })} 
              aria-invalid={errors.email ? 'true' : 'false'} 
              placeholder="Email"
            />
            {errors.email && <p className='text-red-500 mt-2 text-sm'>Woops! {errors.email?.message}</p>}
            {errors.email && <div></div>}

            <label htmlFor="username" className="mt-6 block text-sm font-medium leading-6 text-gray-200">Your username</label>
            <input 
              type="username" 
              className="p-2 mt-6 block w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register('username', {required: 'Username is requried.'})} 
              aria-invalid={errors.username ? 'true' : 'false'} 
              placeholder="Username"
            />
            {errors.username && <p className='text-red-500 mt-2 text-sm'>Woops! {errors.username?.message}</p>}
            {errors.username && <div></div>}

          <label htmlFor="password" className="mt-6 block text-sm font-medium leading-6 text-gray-200">Your password</label>
          <input 
            type="password" 
            placeholder='●●●●●●●●'
            className="p-2 mt-6 block w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register('password', {required: 'Password is required.'})} 
            aria-invalid={errors.password ? 'true' : 'false'} 
          />
          {errors.password && <p className='text-red-500 mt-2 text-sm'>{errors.password?.message}</p>}
          {errors.password && <div></div>}

          <button type="submit" className="mt-20 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Sign up</button>

        </div>
      </form>   

      <div className='text-center text-gray-200 mt-10 text-sm'>
          <p>Do you have an account already?</p>
        </div>
        <div>
          <Link
            to="/login"
            className="mt-10 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Sign in
          </Link>
        </div>

    </div>
  )
}

export default UserForm;