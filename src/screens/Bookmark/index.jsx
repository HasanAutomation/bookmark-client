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
  const [apiResponse, setApiResponse] = useState({});
  const dispatch = useDispatch();

  function showBookmarks() {
    if (bookmarks.length === 0) return <h3>No bookmarks!Add one</h3>;
    const newBookmarks = [...bookmarks];

    let newArrayList =
      newBookmarks.length > 5 ? newBookmarks.splice(0, 5) : newBookmarks;

    return newArrayList.map(bookmark => (
      <BookmarkItem bookmark={bookmark} key={`Item-${bookmark._id}`} />
    ));
  }

  const fetchBookmarks = async page => {
    try {
      setLoading(true);
      const { data } = await apiCalls.getBookmarks(page);
      setApiResponse(data);
      dispatch(getBookmarks({ data }));
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const onNext = () => {
    fetchBookmarks(
      apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.current.page + 1
    );
  };
  const onPrev = () => {
    fetchBookmarks(
      apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.current.page - 1
    );
  };

  useEffect(() => {
    fetchBookmarks(1);
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
      <div className='actions'>
        {loading ? null : (
          <div className='buttons'>
            <button
              onClick={onPrev}
              disabled={
                apiResponse &&
                apiResponse.pagination &&
                !apiResponse.pagination.prev
              }
            >
              Prev
            </button>
            <button
              onClick={onNext}
              disabled={
                apiResponse &&
                apiResponse.pagination &&
                !apiResponse.pagination.next
              }
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookmark;
