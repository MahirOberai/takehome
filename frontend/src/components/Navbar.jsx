import styled from 'styled-components';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import SearchBar from './SearchBar';
import Button from './common/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from "@material-ui/core/Menu";
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: 64px;
  z-index: 8;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 1px 4px rgba(0,0,0,.1);
  padding: 0 16px;;
  box-sizing: border-box;
`;

export default function Navbar( { searchTitle, handleChange }) {
  const auth = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const [gifs, setGifs] = useState([]);
  const [currentView, setCurrentView] = useState('');
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setCurrentView(e.currentTarget)
  };

  return (
    <Nav>
      <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          View Gifs
          
      </Button>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <Link to='/feed'>
          <MenuItem onClick={handleClose}>Gifs Feed</MenuItem>
        </Link>
        <Link to='/saved'>
          <MenuItem onClick={handleClose}>Saved Gifs</MenuItem>
        </Link>
      </Menu>
      <SearchBar className="center"
              handleChange={handleChange}
              // getGifs={getGifs}
      />  
      <div></div>
      <Button onClick={auth.logout}>Logout</Button>
    </Nav>
  )
}
