import apiCalls from '../../utils/api';
import { deleteBookmark, setBookmarks } from '../slices/bookmarkSlice';

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
