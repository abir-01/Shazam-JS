import React from 'react'
import music from '../assets/music-header.jpg'

const Main_Header = () => {
    return (
        <>
            <div className=' bg-danger' style={{ height: '35vh' ,maxWidth:'100%'}}>
                <img src={music} alt="" style={{height:'100%', width:'100%',right:'0'}}/>

            </div>
        </>
    )
}

export default Main_Header