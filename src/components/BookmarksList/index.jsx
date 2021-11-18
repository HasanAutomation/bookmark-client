import React from 'react';
import BookmarkItem from '../BookmarkItem';
import './BookmarkList.scss';

export default function BookmarkList({ bookmarks = [] }) {
  if (bookmarks.length === 0)
    return (
      <div>
        <h4 className='error'>No Bookmarks added! Add one</h4>
      </div>
    );

  return (
    <div>
      {bookmarks.map(bookmark => (
        <BookmarkItem bookmark={bookmark} key={`Item-${bookmark._id}`} />
      ))}
    </div>
  );
}
