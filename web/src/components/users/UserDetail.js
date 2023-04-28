import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usersService from '../../services/users';

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
      {!user ? (<p>User loading</p>) : (
        <>
          <div>{user.username}</div>
        </>
      )}
    </>
  )
}

export default UserDetail