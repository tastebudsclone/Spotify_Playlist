import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../assets/img/backarrow.png';


function BackButton() {
  return (
    <>
      <Link to='/home'>
        <img
          className="justify-start h-5"
          src={arrow}
          alt="backarrow"
          />
      </Link>
    </>
  )
}

export default BackButton;