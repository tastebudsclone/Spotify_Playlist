import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usersService from '../../services/users';
import moment from 'moment';
import PlaylistsList from '../playlists/playlists-list/PlaylistsList';

function UserDetail() {
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await usersService.get(userId);
        setUser(user);
      } catch (error) {
        console.error(error)
      }
    }
    fetchUser();
  }, [userId])

  return (
    <>
      <div className='w-full bg-gray-800'>
      <div className='mt-10 m-5 flex flex-col text-white bg-gray-900 rounded-lg text-left font-medium shadow-lg'>
      {!user ? (<p>User loading</p>) : (
          <div className='p-4'>
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-38 h-38 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
              </div>
              <div className="font-medium dark:text-white">
                  <div>{user.username}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Joined on {moment(user.createdAt).format('LL')}</div>
              </div>
            </div>
          </div>
      )}
      </div>
      </div>

      <div className='w-full bg-gray-800'>
      <div className='mt-8 m-5 flex flex-col text-white bg-gray-900 rounded-lg text-left font-medium shadow-lg'>
          <div className='p-4'>
            <p>My playlists</p>
            <PlaylistsList/>
          </div>
      </div>
      </div>

      <div className='w-full bg-gray-800'>
      <div className='mt-8 m-5 flex flex-col text-white bg-gray-900 rounded-lg text-left font-medium shadow-lg'>
          <div className='p-4'>
            <p>My scores</p>
          </div>
      </div>
      </div>
</>
  )
}

export default UserDetail;