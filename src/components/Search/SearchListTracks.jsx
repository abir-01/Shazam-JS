import React from 'react'
import music from '../../assets/music.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { addFav, removeFav } from "../../actions/index"
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const SearchListTracks = ({ song }) => {
    
    const myState = useSelector((state) => state.addRemoveFavourite)
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center p-2 mx-auto" >


            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.track.images ? song.track.images.coverart : music} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.url} style={{ textDecoration: 'none', color: 'black' }}><h5 className="mx-auto">{song.track.title}</h5></a>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box> */}
                    <button onClick={()=>dispatch(addFav(song.track.images.coverart,song.track.title,song.url))}>Add to Favourite</button>
                </div>

            </div>

        </div>
    )
}

export default SearchListTracks