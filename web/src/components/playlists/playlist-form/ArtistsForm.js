import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import playlistsService from '../../../services/playlists';
import { useNavigate } from 'react-router-dom';
import { PLAYLIST_QUESTION } from '../../../constants/constants'

function ArtistsForm() {

  const navigate = useNavigate();
  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'onBlur' });
  const [serverError, setServerError] = useState(undefined);

  const onPlaylistSubmit = async (playlist) => {
    try {
      setServerError();
      let id = await playlistsService.create(playlist);
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
      <label>{PLAYLIST_QUESTION.Q[2]}</label>
        <input className='mt-2 mb-4 rounded-xl'
          type='text'
          {...register('artistsName', {
            required: 'Please answer before continuing.',
          })}
          aria-invalid={errors.artistsName ? 'true' : 'false'}
        />
        {errors.artistsName && <p className='text-red-500 my-1 text-sm'>{errors.artistsName.message}</p>}
        {errors.artistsName && <div></div>}
        <label>{PLAYLIST_QUESTION.Q[4]}</label>
        <input className='mt-2 mb-4 rounded-xl'
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

export default ArtistsForm