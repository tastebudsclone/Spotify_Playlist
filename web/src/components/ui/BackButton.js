import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/img/backarrow.png';


function BackButton({path}) {
  return (
    <div className='flex'>
      <Link to={path}>
        <img
          className="justify-start p-4 w-10"
          src={arrow}
          alt="backarrow"
        />
      </Link>
    </div>
  )
}

export default BackButton;