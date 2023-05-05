import React from 'react';
import BackButton from '../components/ui/BackButton';
import music from '../assets/img/musical-notes.png'
import { Link } from 'react-router-dom';

function CreatePage() {
  return (
    <div className='bg-gray-800 w-full h-screen p-4 font-mono' >
      <BackButton path='/' />
       <p className='text-gray-300 text-center font-bold text-xl pt-5 mb-20'>Welcome to our playlist creator! We have two ways to help you find the perfect playlist for you. So, which one do you prefer?</p>
      <div class="m-5 flex flex-col justify-center items-center">

          <div className='uppercase my-8 p-6 px-20 flex flex-col font-bold text-gray-800 bg-gradient-to-r from-yellow-200 via-green-200 to-pink-400 hover: rounded-lg text-center shadow-lg transform motion-safe:hover:scale-110'>
            <div className='p-4'>
            <Link to="/playlist/create/onArtists">Based on artists</Link>
            </div>
          </div>

          <div className='uppercase my-8 p-6 flex flex-col px-20 text-gray-800 bg-gradient-to-r from-yellow-200 via-green-200 to-pink-400 rounded-lg text-center font-bold shadow-lg transform motion-safe:hover:scale-110'>
            <div className='p-4'>
                <Link to="/playlist/create/onMood">Based on a mood</Link>
            </div>
          </div>
      </div>
      <img className="pt-4 h-36 mx-auto"
        src={music} 
      />
    </div>
  )
}

export default CreatePage;