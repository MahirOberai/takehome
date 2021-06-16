import React, { Component, useState, useEffect } from 'react';
import './gif-card.scss';

export default function GifCard( {gifObj, setSavedGifs, savedGifs} ) {

    const api_url = `http://localhost:3000/gifs`;

    const [isSelected, setIsSelected] = useState(false);

    const handleSaveGif = () => {
        setIsSelected(!isSelected);
    }

    let imgClass = isSelected ? 'menu-item-selected' : 'menu-item';

    return (
        <div className={imgClass} onClick={handleSaveGif}>
            <div className="background-image" style={{
                backgroundImage: `url(${gifObj.url})`
            }}>
            </div>
        </div>
    );
}
