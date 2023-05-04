import React, { useState, useEffect } from 'react';
import PlaylistFormControl from './PlaylistFormControl';
import { useNavigate } from 'react-router-dom';
import playlistsService from '../../../services/playlists';
import { useForm } from 'react-hook-form';

import Mood from './steps/Mood';
import Tempo from './steps/Tempo';
import Length from './steps/Length';
import Instrumental from './steps/Instrumental';
import Artists from './steps/Artists';


function PlaylistForm() {

  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });

  const [serverError, setServerError] = useState(undefined);

  const onPlaylistSubmit = async (playlist) => {
    try {
      setServerError();
      playlist = await playlistsService.create(playlist);
      navigate({
        pathname: "/playlist/list",
      });
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.message)
      }
    }
  }
  
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {

  }, [currentStep]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  }

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  }



  return (
    <div className='w-full flex mt-10 justify-between items-center bg-gray-200 rounded-xl border-2 border-slate-300'>
      <form onSubmit={handleSubmit(onPlaylistSubmit)}>

      </form>
      
      <PlaylistFormControl />
    </div>
  )
}

export default PlaylistForm;


