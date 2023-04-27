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
            key: '153486416',
            locale: 'en-US'
        },
        headers: {
            // 'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '19b83b8cbamshaa4238222ae4a31p198529jsn2cb508961e73',
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
                    {songs.map((song) => (
                        // console.log(song.track)
                        <RecommendedList song={song} key={song.title} />
                    ))
                    }

                </div>
            </div>
        </>
    )
}

export default Recommended