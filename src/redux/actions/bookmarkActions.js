import apiCalls from '../../utils/api';
import {
  deleteBookmark,
  setBookmarks,
  updateBookmark,
} from '../slices/bookmarkSlice';

export const createBookmark = async (body, dispatch) => {
  try {
    const { data } = await apiCalls.createBookmarkApi(body);
    dispatch(setBookmarks(data));
  } catch (err) {
    console.log(err.response.data.error);
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

export const enhanceBookmark = async (id, body, dispatch) => {
  try {
    const { data } = await apiCalls.updateBookmark(id, body);
    dispatch(updateBookmark({ id, data }));
  } catch (err) {
    console.log(err.response.data.error);
  }
};
