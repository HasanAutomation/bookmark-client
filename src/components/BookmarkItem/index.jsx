import React from 'react';
import Card from '../Card';

function BookmarkItem({ bookmark }) {
  return (
    <Card>
      <div className='link'>
        <a href={bookmark.link} target='_blank'>
          <h4>{bookmark.title}</h4>
        </a>
        <div className='right'>
          <div className='content'>
            <i className='fas fa-edit'></i>
            <i className='far fa-trash-alt'></i>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BookmarkItem;
