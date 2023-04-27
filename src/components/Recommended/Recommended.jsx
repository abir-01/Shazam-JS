import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './playlist.css'
import RecommendedList from './RecommendedList';




const Recommended = () => {
    const [songs, setsongs] = useState([])

    const url = 'https://shazam.p.rapidapi.com/songs/list-recommendations';
    const options = {
        method: 'GET',
        params: {
            key: '336638914',
            locale: 'en-US'
        },
        headers: {
            // 'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '6988e49059msha2951b4d751574ep10dd7cjsnf1f73d3e7297',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    useEffect(() => {

        axios.get(url, options)
            .then((response) => {
                // console.log(response.data.tracks),
                setsongs(response.data.tracks)

            })
            .catch(error => console.error(error))


    }, [])


    return (
        <>
            <div className="p-4">
                <h5 style={{ opacity: '0.7' }}> Recommended <hr /></h5>
                <div className="d-flex overflow-scroll songs">
                    {songs.map((song,i) => (
                        // console.log(song.track)
                        <RecommendedList song={song} key={song.key} />
                    ))
                    }

                </div>
            </div>
        </>
    )
}

export default Recommended