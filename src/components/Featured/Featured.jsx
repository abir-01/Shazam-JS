import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import FeaturedList from './FeaturedList';
import './featured.css'

const Featured = () => {
    const [songs, setsongs] = useState([])

    const url = 'https://shazam.p.rapidapi.com/search?term=martin%20garrix&locale=en-US&offset=0&limit=10';
    const options = {
        method: 'GET',
        headers: {
            //'content-type': 'application/json',
            'X-RapidAPI-Key': '6988e49059msha2951b4d751574ep10dd7cjsnf1f73d3e7297',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    useEffect(() => {

        axios.get(url, options)
            .then((response) => {
                // console.log(response.data),
                setsongs(response.data.tracks.hits)

            })
            .catch(error => console.error(error))


    }, [])


    return (
        <>
            <div className="p-4">
                <h5 style={{ opacity: '0.7' }}>Best From Martin Garrix <hr /></h5>
                <div className="d-flex overflow-scroll songs">
                    {songs.map((song) => (
                        // console.log(song.track),
                        <FeaturedList song={song} key={song.key} />
                    ))
                    }

                </div>
            </div>
        </>
    )
}

export default Featured