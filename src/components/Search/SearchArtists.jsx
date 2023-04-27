import React from 'react'
import music from '../../assets/music.jpg'

const SearchListTracks = ({ song }) => {
    { console.log(song) }
    return (
        <div className="flex justify-center p-2 mx-auto" >


            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.artist.avatar ? song.artist.avatar : music} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.artist.weburl} target='_blank' style={{ textDecoration: 'none', color: 'black' }}><h5 className="mx-auto">{song.artist.name}</h5></a>
                </div>

            </div>
        </div>
    )
}

export default SearchListTracks