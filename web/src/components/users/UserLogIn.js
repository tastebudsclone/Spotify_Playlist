import React, { useState, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import usersService from '../../services/users';
import { AuthContext } from '../../contexts/AuthStore';


function UserLogIn() {
const navigate = useNavigate();
const location = useLocation();
const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur', defaultValues: { username: location?.state?.user?.username } });
const [serverError, setSeverError] = useState(undefined);
const { onUserChange } = useContext(AuthContext);


const onLoginSubmit = async (user) => {
  try {
    setSeverError();
    const userLogged = await usersService.login(user);
    onUserChange(userLogged);
    navigate('/');
  } catch (error) {
    const errors = error.response?.data?.errors;
    if (errors) {
      Object.keys(errors)
        .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
    } else {
      setSeverError(error.message)
    }
  }
}

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {serverError && <div className="p-3 mb-5 text-red-600 bg-red-200 animate-pulse rounded-lg border-red-900"> {serverError} </div>}
      <form onSubmit={handleSubmit(onLoginSubmit)} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-200">
            Username
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="username"
              required
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
              {...register('username', {
                required: 'Usename is required'
              })} 
            />
            {errors.username && <div className='text-red-500 mt-2 text-sm'>Woops! {errors.username?.message}</div>}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-200">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-200 bg-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              {...register('password', {
                required: 'User password is required'
              })} 
            />
            {errors.password && <div className='text-red-500 mt-2 text-sm'>{errors.password?.message}</div>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="mt-20 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Sign in
          </button>
        </div>
      </form>

        <div className='text-center text-gray-200 mt-10 text-sm'>
          <p>- or -</p>
        </div>

        <div>
          <Link
            to="/register"
            className="mt-10 flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-200 shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Sign up
          </Link>
        </div>
    </div>
  )
}

export default UserLogIn;