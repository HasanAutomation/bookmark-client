import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BookmarkList from '../../components/BookmarksList';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import Spinner from '../../components/Spinner';
import { getBookmarks } from '../../redux/slices/bookmarkSlice';
import apiCalls from '../../utils/api';
import './Bookmark.scss';

function Bookmark() {
  const { bookmarks } = useSelector(state => state.bookmark);
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const fetchBookmarks = useCallback(
    async page => {
      try {
        setLoading(true);
        const { data } = await apiCalls.getBookmarks(page);
        setApiResponse(data);
        dispatch(getBookmarks({ data }));
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    fetchBookmarks(1);
  }, [fetchBookmarks]);

  return (
    <>
      <div className='bookmark-header'>
        <button className='add' onClick={() => history.push('/add')}>
          Add
        </button>
        <SearchBar />
      </div>

      <div className='bookmark'>
        <div className='bookmark-list'>
          {loading ? <Spinner /> : <BookmarkList bookmarks={bookmarks} />}
        </div>
      </div>
      {((apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.next) ||
        (apiResponse &&
          apiResponse.pagination &&
          apiResponse.pagination.prev)) && (
        <Pagination apiResponse={apiResponse} fetchBookmarks={fetchBookmarks} />
      )}
    </>
  );
}

export default Bookmark;
