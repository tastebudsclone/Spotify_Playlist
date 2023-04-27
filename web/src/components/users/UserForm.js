import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import usersService from '../../services/users';
import { useNavigate } from 'react-router-dom';

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
<form onSubmit={handleSubmit(onUserSubmit)}>
  {serverError && <div className="text-red-600 bg-red-200 rounded-lg"> {serverError} </div>}
  <div className="mt-6 mb-6 flex justify-center items-center">
      <label htmlFor="email" className="mb-2  text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input 
        type="email" 
        {...register('email', {
          required: 'Email is requried.',
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Email must be valid'
          }
      })} 
        aria-invalid={errors.email ? 'true' : 'false'} 
        className="bg-gray-50 w-1/2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Email"
      />
      {errors.email && <p role='alert'>{errors.email?.message}</p>}
      {errors.email && <div></div>}
      <label htmlFor="username" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
      <input 
        type="username" 
        {...register('username', {required: 'Username is requried.'})} 
        aria-invalid={errors.username ? 'true' : 'false'} 
        className="bg-gray-50 border w-1/2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Username"
      />
      {errors.username && <p role='alert'>{errors.username?.message}</p>}
      {errors.username && <div></div>}
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input 
      type="password" 
      {...register('password', {required: 'Password is required.'})} 
      aria-invalid={errors.password ? 'true' : 'false'}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    />
    {errors.password && <p role='alert'>{errors.password?.message}</p>}
    {errors.password && <div></div>}
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
</form>
  )
}

export default UserForm;