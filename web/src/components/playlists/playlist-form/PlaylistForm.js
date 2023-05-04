import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import playlistsService from '../../../services/playlists';
import { useForm } from 'react-hook-form';
import { PLAYLIST_QUESTION } from '../../../constants/constants'


function PlaylistForm() {

  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);
  const [input1, setInput1] = useState()

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
        setServerError(error.message)
      }
    }
  }

  const handleChange = () => {

  }

  return (
    <div className='w-auto m-4 bg-gray-200 rounded-xl border-2 border-slate-300'>
      <form className='p-5 flex flex-col' onSubmit={handleSubmit(onPlaylistSubmit)}>
      {serverError && <div className="p-3 text-red-600 bg-red-200 animate-pulse rounded-lg border-red-900"> {serverError} </div>}
      <label>Playlist's title</label>
        <input type='text' className='mt-2 mb-4 rounded-xl'
          {...register('title', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.title ? 'true' : 'false'}
        />
        {errors.title && <p className='text-red-500 my-1 text-sm'>{errors.title.message}</p>}
        {errors.title && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[0]}</label>
        <input onChange={handleChange} className='mt-2 mb-4 '
          type='text' {...register('valence', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.valence ? 'true' : 'false'}
        />
        {errors.valence && <p className='text-red-500 my-1 text-sm'>{errors.valence.message}</p>}
        {errors.valence && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[1]}</label>
        <input className='mt-2 mb-4'
          type='text'
          {...register('tempo', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.tempo ? 'true' : 'false'}
        />
        {errors.tempo && <p className='text-red-500 my-1 text-sm'>{errors.tempo.message}</p>}
        {errors.tempo && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[2]}</label>
        <input className='mt-2 mb-4'
          type='text'
          {...register('artistsName', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.artistName ? 'true' : 'false'}
        />
        {errors.artistName && <p className='text-red-500 my-1 text-sm'>{errors.artistName.message}</p>}
        {errors.artistName && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[3]}</label>
        <input className='mt-2 mb-4'
          type='text'
          {...register('instrumentalness', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.instrumentalness ? 'true' : 'false'}
        />
        {errors.instrumentalness && <p className='text-red-500 my-1 text-sm'>{errors.instrumentalness.message}</p>}
        {errors.instrumentalness && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[4]}</label>
        <input className='mt-2 mb-4'
          type='text'
          {...register('limit', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.limit ? 'true' : 'false'}
        />
        {errors.limit && <p className='text-red-500 my-1 text-sm'>{errors.limit.message}</p>}
        {errors.limit && <div></div>}
        <button className='p-1 rounded-xl border-2 border-green-700 bg-green-400'>Create</button>
      </form>
    </div>
    
  )
}

export default PlaylistForm;


