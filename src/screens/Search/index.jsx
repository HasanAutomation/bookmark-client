import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import BookmarkList from '../../components/BookmarksList';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import { getBookmarks } from '../../redux/slices/bookmarkSlice';
import apiCalls from '../../utils/api';

export default function Search() {
  const { bookmarks } = useSelector(state => state.bookmark);
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const dispatch = useDispatch();

  const queryString = useLocation().search;

  const fetchBookmarks = useCallback(
    async (page, name) => {
      try {
        setLoading(true);
        const { data } = await apiCalls.getBookmarks(page, name);
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
    fetchBookmarks(1, queryString.split('=')[1]);
  }, [fetchBookmarks, queryString]);

  if (loading) return <Spinner />;

  return (
    <div>
      <h4 className='info'>Search includes "{queryString.split('=')[1]}"</h4>
      {bookmarks.length > 0 ? (
        <BookmarkList bookmarks={bookmarks} />
      ) : (
        <h4 className='error'>No Matched found</h4>
      )}

      {((apiResponse &&
        apiResponse.pagination &&
        apiResponse.pagination.next) ||
        (apiResponse &&
          apiResponse.pagination &&
          apiResponse.pagination.prev)) && (
        <Pagination apiResponse={apiResponse} fetchBookmarks={fetchBookmarks} />
      )}
    </div>
  );
}
