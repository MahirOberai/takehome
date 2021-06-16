import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import Spacer from './common/Spacer';
import './search-bar.scss';

export default function SearchBar( { handleChange }) {      
    return (
        <form>
            <div>
                <label>
                    <Input
                        type="text"
                        placeholder="Search gifs by title"
                        onChange={handleChange}
                    />
                </label>
            </div>
        </form>
    )
}