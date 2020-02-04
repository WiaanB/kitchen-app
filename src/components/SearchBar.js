import React from 'react';

const SearchBar = ({ handleSearch, handleSubmit }) => {
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' placeholder='What would you like to eat?' onChange={handleSearch}/>
            <input type="submit" value="Search" />
        </form>
    );
}

export default SearchBar;