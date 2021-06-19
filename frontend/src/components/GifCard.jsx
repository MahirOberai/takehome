import React, { useContext, useState, useEffect, useCallback } from 'react';
import useToggle from 'react-use-toggle';
import './gif-card.scss';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

export default function GifCard( {gifObj} ) {

    const auth = useContext(AuthContext);

    const api_url = `http://localhost:3000/`;

    const [isSelected, toggleIsSelected] = useToggle();

    // const [savedGifs, setSavedGifs] = useState([]);

    // const saveGifToAPI = () => {
    //     let obj = gifObj
    //     // obj.is_selected = true
    //     axios(api_url + 'saved', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Authorization': auth.token,
    //         },
    //         body: 101
    //     })
    //     .then(response => {
    //         console.log(response.config.body)
    //     })
    //     .catch(err => console.error(err))
    // }

    const saveGifToAPI = useCallback(() => {
        axios(api_url + 'saved', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': auth.token,
            },
            body: gifObj
        })
        .then(response => {
            console.log(response.config.body)
        })
        .catch(err => console.error(err))
    }, []);

    // const removeGifFromAPI = () => {
    //     let obj = gifObj
    //     obj.is_selected = false
    //     axios(api_url + 'get_saved_gifs', {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-Authorization': auth.token,
    //         },
    //         body: obj
    //     })
    //     .then(response => {
    //         console.log(response.config.body)
    //     })
    //     .catch(err => console.error(err))  
    // }

    const handleGifOnClick = (e) => {
        e.preventDefault();
        toggleIsSelected();
        console.log('saveGifToAPI')
        saveGifToAPI()

    }

    let imgClass = isSelected ? 'menu-item-selected' : 'menu-item';

    return (
        <div className={imgClass} onClick={handleGifOnClick}>
            <div className="background-image" style={{
                backgroundImage: `url(${gifObj.url})`
            }}>
            </div>
        </div>
    );
}
