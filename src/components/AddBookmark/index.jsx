import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBookmark } from '../../redux/actions/bookmarkActions';
import Card from '../Card';
import './AddBookmark.scss';

function AddBookmark() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const { loading } = useSelector(state => state.bookmark);

  const alert = useAlert();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    createBookmark({ title, link }, dispatch, history, alert);
    setTitle('');
    setLink('');
  };

  return (
    <Card>
      <div className='card-form'>
        <h3 className='header'>Add Bookmark</h3>
        <form>
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
          <button onClick={onSubmit}>{loading ? '.....' : 'Save'}</button>
          <button onClick={() => history.push('/bookmarks')}>Back</button>
        </form>
      </div>
    </Card>
  );
}

export default AddBookmark;
