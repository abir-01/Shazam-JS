import React, { Fragment } from 'react'
import Sidebar from './components/sidebar'
import Main_Header from './components/Main_Header'
import Featured from './components/Featured/Featured'
import Recommended from './components/Recommended/Recommended'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './components/Search/Search'
import Favourites from './components/Favourites/Favourites'
import Playlist from './components/Playlist'

const App = () => {
  return (
    <BrowserRouter >
      <div className="d-flex">
        <Sidebar />
        <div className="d-flex flex-column col-xs-12 col-sm-10 position-absolute" style={{right:'0'}}>
          
          <Routes>
            <Route exact path="/" element={[
              <Main_Header />,<Featured />, <Recommended />
            ]} />
            <Route exact path="/search" element={<Search/>} />
            <Route exact path="/favourites" element={<Favourites/>} />
            <Route exact path="/playlists" element={<Playlist/>} />
          </Routes>

          
          
         </div>

      </div>
    </BrowserRouter>
      
    
  )
}

export default App