import React, { useContext } from 'react';
import UserDetail from '../components/users/UserDetail';
import BackButton from '../components/ui/BackButton';
import { AuthContext } from '../contexts/AuthStore';

function Profile() {

  const { logout } = useContext(AuthContext)

  return (
      <div className='h-auto w-full p-4 bg-gray-800 font-mono'>
        <div className='flex justify-between'>
          <BackButton path='/home'/>
          <button onClick={logout} className='py-2 px-2 mr-2 mb-2 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Log out</button>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <UserDetail />
          </div>
        </div>
      </div>
  )
}

export default Profile;