import React from 'react'
// import image from '../assets/home.'
import { Link } from 'react-router-dom'

const sidebar = () => {
    return (
        <>
            <div className="col-xs-0 col-sm-2 bg-primary text-light 
             d-flex flex-column justify-content-center" style={{ height: '100vh', paddingInline:'4vw'}}>
                <div>
                    <div className='my-3'>
                    <Link to='/' alt="home"  style={{ color:'white', textDecoration:'none'}}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/home-page.png" alt="" style={{ paddingRight: '1rem' ,display:'inline-block'}} />
                            Home<br /></Link>

                    </div>
                    <div>
                    <Link to='/search' style={{  color: 'white', textDecoration: 'none' }}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/search.png" alt="" style={{ paddingRight: '1rem', display: 'inline-block' }} />Search<br/></Link>

                    </div>
                    <div className='my-3'> 
                    <Link to='/favourites'  style={{  color: 'white', textDecoration: 'none' }}>
                        <img src="https://img.icons8.com/ios-glyphs/1x/filled-like.png" alt="" style={{ paddingRight: '1rem', display: 'inline-block' }} />
                        Favourites<br/></Link>

                    </div>
                    <div className='my-3'>
                        <Link to='/playlists'style={{ color: 'white', textDecoration: 'none' }}>
                            <img src="https://img.icons8.com/windows/1x/circled-play.png" alt="" style={{ paddingRight: '1rem', display: 'inline-block' }}
                            />Playlists</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default sidebar