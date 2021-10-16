import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AddBookmark from '../../components/AddBookmark';
import BookmarkItem from '../../components/BookmarkItem';
import { getBookmarks } from '../../redux/slices/bookmarkSlice';
import apiCalls from '../../utils/api';
import './Bookmark.scss';

function Bookmark() {
  const { bookmarks } = useSelector(state => state.bookmark);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  function showBookmarks() {
    if (bookmarks.length === 0) return <h3>No bookmarks!Add one</h3>;
    return bookmarks.map(bookmark => (
      <BookmarkItem bookmark={bookmark} key={`Item-${bookmark._id}`} />
    ));
  }

  const fetchBookmarks = async () => {
    try {
      setLoading(true);
      const { data } = await apiCalls.getBookmarks();
      dispatch(getBookmarks({ data }));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookmarks();
  }, []);

  return (
    <div className='container'>
      <div className='bookmark'>
        <div className='bookmark-form'>
          <AddBookmark />
        </div>
        <br />
        <br />
        <br />
        <div className='bookmark-list'>
          {loading ? <h3>Loading...</h3> : showBookmarks()}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
