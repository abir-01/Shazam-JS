import React from 'react'
import music from '../../assets/music.jpg'
import { removeFav } from "../../actions/index"
import { useDispatch } from 'react-redux'
import { addToPlaylist, removeFromPlaylist, addPlaylist, removePlaylist } from '../../actions/index' 

const PlaylistList = ({ songs, id }) => {
// console.log("playlistlist + ",songs)
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center p-2 mx-auto" >


            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={music} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="mx-auto">{songs.title}</h5>
                    <button onClick={() => dispatch(removePlaylist(id))}>Remove Playlist</button>
                </div>

            </div>
        </div>
    )
}

export default PlaylistList