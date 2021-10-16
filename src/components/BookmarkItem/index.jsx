import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookmark } from '../../redux/actions/bookmarkActions';
import Card from '../Card';

function BookmarkItem({ bookmark }) {
  const dispatch = useDispatch();

  const handleDelete = id => {
    removeBookmark(id, dispatch);
  };

  return (
    <Card>
      <div className='link'>
        <a href={bookmark.link} target='_blank'>
          <h4>{bookmark.title}</h4>
        </a>
        <div className='right'>
          <div className='content'>
            <i className='fas fa-edit'></i>
            <i
              className='far fa-trash-alt'
              onClick={() => handleDelete(bookmark._id)}
            ></i>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BookmarkItem;
