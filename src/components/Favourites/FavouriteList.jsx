import React from 'react'
import music from '../../assets/music.jpg'
import {  removeFav } from "../../actions/index"
import { useSelector, useDispatch } from 'react-redux'

const FavouriteList = ({ song ,id}) => {
    
    const myState = useSelector((state) => state.addRemoveFavourite)
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center p-2 mx-auto" >


            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.image ? song.image : music} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.url} style={{ textDecoration: 'none', color: 'black' }}><h5 className="mx-auto">{song.title}</h5></a>
                    <button onClick={() => dispatch(removeFav(song.image, song.title, song.url,id))}>Remove from Favourite</button>
                </div>

            </div>
        </div>
    )
}

export default FavouriteList