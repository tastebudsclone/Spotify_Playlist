import React from 'react';
import { Link } from 'react-router-dom';

function DeleteButton({id}) {
  return (
    <div className='flex'>
      <Link to={`/playlist/${id}/delete`}>
        <p>DELETE</p>
      </Link>
    </div>
  )
}

export default DeleteButton