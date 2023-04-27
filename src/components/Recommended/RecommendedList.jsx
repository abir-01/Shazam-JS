import React from 'react'
import music from '../../assets/music.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { addFav, removeFav } from "../../actions/index"

const RecommendedList = ({ song }) => {
    const myState = useSelector((state) => state.addRemoveFavourite)
    const dispatch = useDispatch();
    return (
         <div className="flex justify-center p-2 mx-auto" >


            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.images? song.images.coverart:music} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.url} style={{ textDecoration: 'none', color: 'black' }}><h5 className="mx-auto">{song.title.substring(0, 20)}</h5></a>
                    <button onClick={() => dispatch(addFav(song.track.images.coverart, song.track.title, song.url))}>Add to Favourite</button>
                </div>

            </div>
        </div>
    )
}

export default RecommendedList