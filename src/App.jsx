import React, { Fragment } from 'react'
import Sidebar from './components/sidebar'
import Main_Header from './components/Main_Header'
import Featured from './components/Featured'
import Recommended from './components/Recommended/Recommended'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search'
import Favourites from './components/Favourites'
import Playlist from './components/Playlist'

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column col-xs-12 col-sm-10">
          <Main_Header />
          <Routes>
            <Route path="/" element={[<Featured />, <Recommended />]} />
            <Route path="/search" element={<Search/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/playlists" element={<Playlist/>} />
          </Routes>

          
          
         </div>

      </div>
    </BrowserRouter>
      
    
  )
}

export default App