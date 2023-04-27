import React from 'react'

const FeaturedList = ({song}) => {
    return (
        <div className="flex justify-center p-2 mx-auto" >
           
            <div className="card" style={{ width: "16rem", border: 'none', textAlign: 'center' }}>
                <img src={song.track.images.coverart} className="card-img-top" alt="..." />
                <div className="card-body">
                    <a href={song.track.url} style={{textDecoration:'none',color:'black'}}><h5 className="mx-auto">{song.track.title.substring(0, 20)}</h5></a>
                </div>
                
            </div>
        </div>
    )
}

export default FeaturedList