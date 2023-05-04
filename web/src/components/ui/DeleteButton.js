import React from 'react';
import { useNavigate } from 'react-router-dom';
import playlistsService from '../../services/playlists';
import deleteImg from '../../assets/img/delete.png'

function DeleteButton({id}) {
  const navigate = useNavigate();
  const handleOnClick = async (id) => {
    try {
      await playlistsService.deletePlaylist(id)
      navigate('/discover')
    } catch(error){
      console.error(error)
    }
  }
  return (

    <button className='flex flex-col items-center justify-center' onClick={() => handleOnClick(id)}
      to={`/playlist/${id}/delete`}>
      <img className='h-12' src={deleteImg} alt=''/>
      <small>Delete Playlist</small>
    </button>

  )
}

export default DeleteButton