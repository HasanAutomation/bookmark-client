import apiCalls from '../../utils/api';
import {
  deleteBookmark,
  setBookmarks,
  setLoading,
  setLoadingFalse,
  updateBookmark,
} from '../slices/bookmarkSlice';

export const createBookmark = async (body, dispatch, history, alert = null) => {
  try {
    dispatch(setLoading());
    const { data } = await apiCalls.createBookmarkApi(body);
    dispatch(setBookmarks(data));
    dispatch(setLoadingFalse());
    history.push('/bookmarks');
  } catch (err) {
    dispatch(setLoadingFalse());
    alert.error(
      (err.response && err.response.data.error) || 'Something went error!'
    );
  }
};

export const removeBookmark = async (id, dispatch) => {
  try {
    await apiCalls.deleteBookmarkApi(id);
    dispatch(deleteBookmark(id));
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const enhanceBookmark = async (id, body, dispatch, alert = null) => {
  try {
    dispatch(setLoading());
    const { data } = await apiCalls.updateBookmark(id, body);
    dispatch(updateBookmark({ id, data }));
    dispatch(setLoadingFalse());
    alert.success('Updated');
  } catch (err) {
    dispatch(setLoadingFalse());
    alert.error(
      (err.response && err.response.data.error) || 'Something wrong happened'
    );
  }
};
