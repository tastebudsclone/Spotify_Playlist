import React from 'react';
import UserDetail from '../components/users/UserDetail';
import BackButton from '../components/ui/BackButton';

function Profile() {
  return (
      <div className='h-full w-full p-4 bg-gray-800 font-mono'>
        <BackButton path='/home'/>
        <div className="flex min-h-full flex-1 flex-col">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <UserDetail />
          </div>
        </div>
      </div>
  )
}

export default Profile;