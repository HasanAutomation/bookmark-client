import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeBookmark } from '../../redux/actions/bookmarkActions';
import Card from '../Card';

function BookmarkItem({ bookmark }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = id => {
    removeBookmark(id, dispatch);
  };
  const handleEdit = id => {
    history.push(`/bookmarks/${id}`);
  };

  return (
    <Card>
      <div className='link'>
        <a href={bookmark.link} target='_blank'>
          <h4>{bookmark.title}</h4>
        </a>
        <div className='right'>
          <div className='content'>
            <i
              className='fas fa-edit'
              onClick={() => handleEdit(bookmark._id)}
            ></i>
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
