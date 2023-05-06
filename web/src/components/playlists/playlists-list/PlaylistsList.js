import React, {useState, useEffect} from 'react'
import playlistService from '../../../services/playlists';
import usersService from '../../../services/users';
import PlaylistItem from '../playlist-item/PlaylistItem';
import { useParams } from 'react-router-dom';

function PlaylistsList() {
  const [playlists, setPlaylists] = useState([]);
  const  { userId }  = useParams()
  const [user, setUser] = useState()
  
  useEffect(() => {
    async function fetchPlaylists() {
      try {
        if (!userId) {
          const playlists = await playlistService.list(); 
          setPlaylists(playlists)
        } else {
          const user = await usersService.get(userId);
          setPlaylists(user.playlists)
          setUser(user)
        }
      } catch (error){
        console.error(error)
      }
    }
    fetchPlaylists()
  }, [userId]);
  
  return (
    <>
      {playlists.map((playlist) => <PlaylistItem key={playlist.id} user={user} playlist={playlist} />)}
    </>
  )
}

export default PlaylistsList;