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
      <div style={{}}>

        <Sidebar />
      </div>
        
        <div className="d-flex flex-column position-absolute" style={{right:'0',width:'80%'}}>
          
          <Routes>
            <Route exact path="/Shazam-JS/" element={[
              <Main_Header />,<Featured />, <Recommended />
            ]} />
            <Route exact path="/Shazam-JS/search" element={<Search/>} />
            <Route exact path="/Shazam-JS/favourites" element={<Favourites/>} />
            <Route exact path="/Shazam-JS/playlists" element={<Playlist/>} />
          </Routes>

          
          
         </div>

      
    </BrowserRouter>
      
    
  )
}

export default App