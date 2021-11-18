import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchBar.scss';

export default function SearchBar() {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`/search?name=${term}`);
  };

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='search'>
          Search
        </label>
        <input
          type='text'
          placeholder='Press Enter'
          required
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
