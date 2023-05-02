import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import SearchListTracks from './SearchListTracks';
import SearchArtists from './SearchArtists'

const Search = () => {
  const [query, setquery] = useState('martin');
  const [SearchResultsTracks, setSearchResultsTracks] = useState([]);
  const [SearchResultsArtists, setSearchResultsArtists] = useState([]);
  const [text1, settext1] = useState('')

  const url = `https://shazam.p.rapidapi.com/search?term=${query}`

  const options = {
    method: 'GET',

    params: {

      locale: 'en-US',
      offset: '0',
      limit: '20'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': 'a4ae74290bmshb62fcdd79723458p13e868jsn0445ec2e435e',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(url, options)
      .then(
        response => {
          console.log(response),
            console.log(response.data.artists.hits),
            setSearchResultsTracks(response.data.tracks.hits)
          setSearchResultsArtists(response.data.artists.hits)
        })

  }, [query])
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
 
    console.log(text1);
    setquery(text1);
    console.log('query=' + query)
  
  })

  const handleInputChange = useCallback((e) => {

    settext1(e.target.value)
  })

  return (
    <>
      <div className=" flex flex-col justify-center mb-20">
        <div className="relative sm:py-6 w-full sm:max-w-2xl sm:mx-auto">
          <div className="overflow-hidden z-0 rounded-full relative sm:p-2 md:p-3">
            <form className="relative flex z-50 bg-white rounded-full" onSubmit={handleSubmit}>

              <div className="search  sm:px-4 md:px-6 py-4 my-2">
                <SearchIcon />
              </div>
              <input type="text" style={{ fontSize: '1.5rem',maxWidth:'80%'}} onChange={handleInputChange}

                placeholder="Enter your search here" className="
                rounded-full focus:ring-0 outline-none border-none flex-1  py-4 px-0 text-gray-700 " />
            </form>
            <div className="glow glow-1 z-10 bg-pink-400 absolute" />
            <div className="glow glow-2 z-20 bg-purple-400 absolute" />
            <div className="glow glow-3 z-30 bg-yellow-400 absolute" />
            <div className="glow glow-4 z-40 bg-blue-400 absolute" />
          </div>
        </div>
      </div>

      <div className="px-4">
        <h5 style={{ opacity: '0.7' }}> Search Tracks <hr /></h5>
        <div className="d-flex overflow-scroll songs">
          {SearchResultsTracks.map((song, i) => (

            <SearchListTracks song={song} key={song.key} />
          ))
          }

        </div>
      </div>
      <div className="px-4">
        <h5 style={{ opacity: '0.7' }}> Search Artists <hr /></h5>
        <div className="d-flex overflow-scroll songs">
          {SearchResultsArtists.map((song) => (

            <SearchArtists song={song} key={song.key} />
          ))
          }

        </div>
      </div>
    </>
  );
};

export default Search;
