import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { enhanceBookmark } from '../../redux/actions/bookmarkActions';
import { setBookmark } from '../../redux/slices/bookmarkSlice';
import apiCalls from '../../utils/api';
import Card from '../Card';
import './EditBookmark.scss';

function EditBookmark() {
  const params = useParams();

  const bookmark = useSelector(state =>
    state.bookmark.bookmarks.find(book => book._id === params.id)
  );
  const { loading: loadingUpdate } = useSelector(state => state.bookmark);

  const bookmarkObj = useSelector(state => state.bookmark.bookmark);

  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState(
    bookmark?.title || bookmarkObj.title || ''
  );
  const [link, setLink] = useState(bookmark?.link || bookmarkObj.link || '');

  const alert = useAlert();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    enhanceBookmark(params.id, { title, link }, dispatch, alert);
  };

  useEffect(() => {
    const fetchBookmark = async () => {
      try {
        const { data } = await apiCalls.getBookmark(params.id);
        dispatch(setBookmark(data.data));
        setLoading(false);
      } catch (err) {
        console.log(err.response.data.error);
        setLoading(false);
      }
    };

    fetchBookmark();
  }, [params.id, dispatch]);

  if (loading) return <h4>Loading....</h4>;

  return (
    <Card>
      <div className='card-form'>
        <h3 className='header'>Edit Bookmark</h3>
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
          <button onClick={e => onSubmit(e)}>
            {loadingUpdate ? '...' : 'Update'}
          </button>
          <Link to='/bookmarks'>
            <button>Back</button>
          </Link>
        </form>
      </div>
    </Card>
  );
}

export default EditBookmark;
