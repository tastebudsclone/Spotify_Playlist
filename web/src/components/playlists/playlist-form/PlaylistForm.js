import React from 'react';
import BackButton from '../../ui/BackButton';

function PlaylistForm() {
  return (
    <div className='bg-green-400 w-full h-full p-4'>
      <BackButton />
      <div class="flex flex-col justify-center items-center h-full">
        <div className='w-full'>
          <div className='m-5 p-8 flex flex-col text-white bg-gray-900 rounded-lg text-center font-medium shadow-lg'>
              <div className='p-4'>
                <p>FORM 1</p>
              </div>
          </div>
        </div>

        <div className='w-full'>
          <div className='m-5 p-8 flex flex-col text-white bg-gray-900 rounded-lg text-center font-medium shadow-lg'>
              <div className='p-4'>
                <p>FORM 2</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistForm


