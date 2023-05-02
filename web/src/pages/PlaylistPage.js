import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import playlistsService from '../services/playlists';
import BackButton from '../components/ui/BackButton';
import DeleteButton from '../components/ui/DeleteButton';

function Playlist() {
  const { id } = useParams();
  const [data, setData] = useState({})
  

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const data = await playlistsService.detail(id);
        console.log(data)
        setData(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPlaylist();
  }, [id])
  return (
    <div className='w-full h-full p-4 bg-gray-800 m:mx-auto sm:w-full sm:max-w-sm text-white'>
      <BackButton path='/discover'/>
    {!data.data ? (<>Loading...</>) : (
      <div>
        
        <div className="grid grid-cols-2">
          <div>
              <img className="h-auto max-w-full" src={data.data.images[0]} alt="img1"/>
          </div>
          <div>
              <img className="h-auto max-w-full" src={data.data.images[1]} alt="img2"/>
          </div>
          <div>
              <img className="h-auto max-w-full" src={data.data.images[2]} alt="img3"/>
          </div>
          <div>
              <img className="h-auto max-w-full" src={data.data.images[3]} alt="img4"/>
          </div>
        </div>

        <h4>{data.data.name}</h4>
        {data.tracks.map((track) => (
          <p>{track.name}</p>
        ))}
      </div>
    )}
    <DeleteButton id={id}/>
    </div>
  )
}

export default Playlist;