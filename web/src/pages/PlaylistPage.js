import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import playlistsService from '../services/playlists';
import usersService from '../services/users';
import BackButton from '../components/ui/BackButton';
import DeleteButton from '../components/ui/DeleteButton';
import { AuthContext } from '../contexts/AuthStore';
import liked from '../assets/img/heart.png';
import dislike from '../assets/img/love.png';

import stars from '../assets/img/stars.png'

function Playlist() {
  const { id } = useParams();
  const [data, setData] = useState({})
  const { user } = useContext(AuthContext)
  const [isOwner, setIsOwner] = useState(false)
  const [like, setLike] = useState()

  const handleClick = (id) => {
      usersService.like(id)
      setLike(!like)
    }
  

  useEffect(() => {
    async function fetchPlaylist() {
      try {
        const data = await playlistsService.detail(id);
        if (data.data.owner.id === user.id) {
          setIsOwner(true)
        } else {
          setIsOwner(false)
        }
        const isLiked = data.data.likes?.filter(like => like.user === user.id);
        if (isLiked[0]) {
          setLike(true)
        } else {
          setLike(false)
        }
        setData(data);
      } catch (error) {
        console.error(error)
      }
    }
    fetchPlaylist();
  }, [id, user])
  return (
    <div className='w-full h-auto flex flex-col items-center justify-between p-4 bg-gray-800 text-white font-mono'>
      <div>
        <div className="flex justify-between">
          <BackButton path='/discover'/>
          <button onClick={() => handleClick(id)} className='w-10'>
            {!like ? <img src={dislike} alt=''/> : <img src={liked} alt=''/>}
          </button>
        </div>
            {!data.data ? (<div className='p-10 text-center justify-center'><svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg> </div>) : (
        <div>
          
          <div className='flex flex-row justify-around p-2'>
              <img src={stars} className='w-7 h-7' alt=''/>
              <h2 className='text-2xl font-semibold'>{data.data.title}</h2>
              <img src={stars} className='w-7 h-7' alt=''/>
          </div>

          <div className="grid grid-cols-2 m-5">
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

          {data.tracks.map((track) => (
            <div className='m-5'>
              <p className='p-3'>{track.artists[0].name} - {track.name}</p>
              {!track.preview_url ? <small className='italic p-3'>Preview Unavailable</small> : <audio controls>
                <source src={`${track.preview_url}`} />
              </audio>}
            </div>
          ))}
        </div>
            )}
      </div>
    {isOwner ?  <DeleteButton id={id}/> : <></>}
    </div>
  )
}

export default Playlist;