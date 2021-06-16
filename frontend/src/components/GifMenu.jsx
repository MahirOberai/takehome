import React from 'react';
import GifCard from './GifCard';
import './gif-menu.scss';

export default function GifMenu( {gifs, setSavedGifs, savedGifs} ) {

    return (
        <div className='menu'>
            {
                gifs.map(gifObj => 
                    <GifCard key={gifObj.id} gifObj={gifObj} setSavedGifs={setSavedGifs} savedGifs={savedGifs} /> 
                )
            }
        </div>    
  )
}