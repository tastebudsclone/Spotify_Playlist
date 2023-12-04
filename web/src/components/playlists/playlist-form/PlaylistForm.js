import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import playlistsService from '../../../services/playlists';
import { useForm } from 'react-hook-form';
import { PLAYLIST_QUESTION } from '../../../constants/constants';

import stars from '../../../assets/img/stars.png';


function PlaylistForm() {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);

  const input1Value = watch('valence');
  const input2Value = watch('tempo');
  const input3Value = watch('instrumentalness');
  const input4Value = watch('limit');
  

  const onPlaylistSubmit = async (playlist) => {
    try {
      setServerError();
      const id = await playlistsService.create(playlist);
      navigate(`/playlists/${id}`)
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors)
          .forEach((inputName) => setError(inputName, { message: errors[inputName] }))
      } else {
        setServerError(error.response.data.message)
      }
    }
  }

  return (
    <div className='w-auto m-4 bg-gray-200 rounded-xl border-2 border-slate-300'>
      <form className='p-5 flex flex-col' onSubmit={handleSubmit(onPlaylistSubmit)}>
      {serverError && <div className="text-red-600 bg-red-200 animate-pulse rounded-lg border-red-900 text-center"> {serverError} </div>}
      <div className='flex flex-row justify-center'>
        <label className='text-center'>Playlist's title</label>
        <img src={stars} className='mx-2 w-5 h-5' alt=''/>
      </div>
        <input type='text' className='mt-2 mb-4 rounded-xl'
        placeholder='Example: "Playlist 1"'
          {...register('title', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.title.message}</p>}
        {errors.title && <div></div>}
        <label className='text-justify'>{PLAYLIST_QUESTION.Q[0]}</label>
        <input className="mt-2 w-full h-2 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 rounded-lg appearance-none cursor-pointer"
        type="range"
        min="1"
        max="10"
        {...register('valence', {
          required: 'Please answer before continuing.',
        })}
        aria-invalid={errors.valence ? 'true' : 'false'}
      />
      <small className='text-center mt-1'>{input1Value}</small>
        {errors.valence && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.valence.message}</p>}
        {errors.valence && <div></div>}
        <label className='text-justify mt-5'>{PLAYLIST_QUESTION.Q[1]}</label>
        <input className="mt-2 w-full h-2 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 rounded-lg appearance-none cursor-pointer"
        type="range"
        min="40"
        max="240"
        {...register('tempo', {
          required: 'Please answer before continuing.',
        })}
        aria-invalid={errors.tempo ? 'true' : 'false'}
      />
      <small className='text-center mt-1'>{input2Value}</small>
        {errors.tempo && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.tempo.message}</p>}
        {errors.tempo && <div></div>}
        <label className='text-justify mt-5'>{PLAYLIST_QUESTION.Q[2]}</label>
        <input className='mt-2 mb-4 rounded-xl'
          type='text'
          placeholder='Example: Shakira, Beyonce, etc.'
          {...register('artistsName', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.artistName ? 'true' : 'false'}
        />
        {errors.artistName && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.artistName.message}</p>}
        {errors.artistName && <div></div>}
        <label className='text-justify mt-5'>{PLAYLIST_QUESTION.Q[3]}</label>
        <input className="mt-2 w-full h-2 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 rounded-lg appearance-none cursor-pointer"
        type="range"
        min="1"
        max="10"
        {...register('instrumentalness', {
          required: 'Please answer before continuing.',
        })}
        aria-invalid={errors.instrumentalness ? 'true' : 'false'}
      />
      <small className='text-center mt-1'>{input3Value}</small>
        {errors.instrumentalness && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.instrumentalness.message}</p>}
        {errors.instrumentalness && <div></div>}
        <label className='text-justify mt-5'>{PLAYLIST_QUESTION.Q[4]}</label>
        <input className="mt-2 w-full h-2 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600 rounded-lg appearance-none cursor-pointer"
        type="range"
        min="4"
        max="20"
        {...register('limit', {
          required: 'Please answer before continuing.',
        })}
        aria-invalid={errors.limit ? 'true' : 'false'}
      />
      <small className='text-center mt-1'>{input4Value}</small>
        {errors.limit && <p className='text-red-500 my-1 text-sm text-center p-3'>{errors.limit.message}</p>}
        {errors.limit && <div></div>}
        <button className='p-1 mt-5 rounded-xl border-2 border-indigo-700 bg-indigo-400'>Create</button>
      </form>
    </div>
    
  )
}

export default PlaylistForm;


