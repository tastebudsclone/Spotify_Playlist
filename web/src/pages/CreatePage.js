import React from 'react';
import BackButton from '../components/ui/BackButton';
import music from '../assets/img/music.png'
import { Link } from 'react-router-dom';

function CreatePage() {
  return (
    <div className='bg-green-400 w-full h-screen p-4 font-mono' >
      <BackButton path='/' />
       <p className='text-black text-center font-bold text-lg pt-5'>Welcome to our playlist creator! We have two ways to help you find the perfect playlist for you. So, which one do you prefer?</p>
      <div class="h-4/6 flex flex-col justify-center items-center">

          <div className='m-5 p-8 flex flex-col text-white hover:bg-gray-800 bg-gray-900 rounded-lg text-center font-medium shadow-lg'>
            <div className='p-4'>
            <Link to="/playlist/create/onArtists">Create a playlist based on specific artists</Link>
            </div>
          </div>

          <div className='m-5 p-8 flex flex-col text-white  hover:bg-gray-800 bg-gray-900 rounded-lg text-center font-medium shadow-lg'>
            <div className='p-4'>
                <Link to="/playlist/create/onMood">Create a playlist based on specific mood</Link>
            </div>
          </div>
      </div>
      <img className="w-20 h-20 mx-auto"
        src={music} 
      />
    </div>
  )
}

export default CreatePage;