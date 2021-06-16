import { useContext, useState, useEffect } from 'react';
import Auth from './auth/Auth';
import Navbar from './Navbar';
import GifMenu from './GifMenu';
import { AuthContext } from '../context/AuthContext';

import axios from 'axios';

import '../styles/app.css';

import { BrowseRouter as Router, Switch, Route } from 'react-router-dom';

import gifsData from './gif_seed.json';


function App() {
  console.log("RENDERING APP.JSX"); 

  const auth = useContext(AuthContext);

  const [searchTitle, setSearchTitle] = useState('');
  const [savedGifs, setSavedGifs] = useState([]);
  const [gifs, setGifs] = useState([]);

  const api_url = `http://localhost:3000/gifs`

  useEffect(() => {
    axios(api_url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': auth.token,
      },
    })
    .then(response => {
      setGifs(response.data)
    })
    .catch(err => console.log(err))
  }, []);

  const handleChangeSearch = (e) => 
    setSearchTitle(e.target.value)
  
  const filteredGifs = 
    gifs.filter(gifObj => 
      gifObj.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  if (!auth.token) {
    return <Auth />
  }

  if (!gifs.length) {
    return <div className='tc'><h1>Loading Gifs</h1></div>;
  }  

  return (
    <div className="container">
      <div className="row">
        <Navbar 
          handleChange={handleChangeSearch}/>
      </div>
      <Switch>
        <Route
          path='/feed'
          render={() => (
            <GifMenu gifs={filteredGifs} />
          )}
        />
        <Route
          path='/saved'
          render={() => (
            <GifMenu gifs={savedGifs}/>
          )}
        />
      </Switch>
    </div>
  )
}

export default App;
