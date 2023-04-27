import React from 'react'
import { useState, useCallback } from 'react'
import PlaylistList from './PlaylistList'
import { useDispatch, useSelector } from 'react-redux'
import music from '../../assets/music.jpg'
import { addToPlaylist, removeFromPlaylist, addPlaylist, removePlaylist } from '../../actions/index'


const Playlist = () => {

  const [name, setname] = useState('')

  const handleInputChange = useCallback((e) => {

    setname(e.target.value)
  })
  const handleOnClick = useCallback((e) => {

    e.preventDefault()
    console.log(name)
    dispatch(addPlaylist(music, name))


  }
  )

  const dispatch = useDispatch();
  const myState = useSelector((state) => state.addRemovePlaylists)

  return (
    <>
      <div className="p-4">
        <h5 style={{ opacity: '0.7' }}> Playlists <hr /></h5>
      </div>
      <div className='p-4' style={{ textAlign: 'center' }}>


        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{ width: '35%' }}>
          Add New Playlist
        </button>


        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">New Playlist</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="/action_page.php">
                  <label htmlFor="fname">Name:</label>
                  <input type="text" id="fname" name="fname" style={{ marginLeft: '1rem', border: '2px solid black ', borderRadius: '2rem', paddingInline: '1rem' }} onChange={handleInputChange} /><br /><br />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4">

        <div className="d-flex flex-wrap favs">
          {myState.map((fav, i) => (
            <PlaylistList songs={fav} id={i} />
          ))
          }

        </div>
      </div>
    </>
  )
}

export default Playlist