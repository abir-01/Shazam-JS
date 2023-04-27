
import { useSelector, useDispatch } from 'react-redux'
import music from '../../assets/music.jpg'
import FavouriteList from './FavouriteList'


const Favourites = () => {

  const myState = useSelector((state) => state.addRemoveFavourite)  
  
  return (

    <div className="px-4">
      <h5 style={{ opacity: '0.7' }}> Search Tracks <hr /></h5>
      <div className="d-flex flex-wrap favs">
        {myState.map((fav, i) => (
          console.log(fav),
          <FavouriteList song={fav} id={i} />
        ))
        }

      </div>
    </div>

    
  )
}

export default Favourites