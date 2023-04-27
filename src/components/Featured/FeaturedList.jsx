import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFav, removeFav } from "../../actions/index"

const FeaturedList = ({ song }) => {
    const myState = useSelector((state) => state.addRemoveFavourite)
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center p-2 mx-auto" >
           
            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.track.images.coverart} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.track.url} style={{ textDecoration: 'none', color: 'black' }}><h5 className="mx-auto">{song.track.title.substring(0, 20)}</h5></a>
                    <button onClick={() => dispatch(addFav(song.track.images.coverart, song.track.title, song.url))}>Add to Favourite</button>
                </div>
                
            </div>
        </div>
    )
}

export default FeaturedList