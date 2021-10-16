import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBookmark } from '../../redux/actions/bookmarkActions';
import Card from '../Card';
import './AddBookmark.scss';

function AddBookmark() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    createBookmark({ title, link }, dispatch);
    setTitle('');
    setLink('');
  };

  return (
    <Card>
      <div className='card-form'>
        <h3 className='header'>Add Bookmark</h3>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Enter a title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type='text'
            placeholder='Enter a link'
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    </Card>
  );
}

export default AddBookmark;
