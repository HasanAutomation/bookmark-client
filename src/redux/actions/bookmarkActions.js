import apiCalls from '../../utils/api';
import { setBookmarks } from '../slices/bookmarkSlice';

export const createBookmark = async (body, dispatch) => {
  try {
    const { data } = await apiCalls.createBookmark(body);
    dispatch(setBookmarks(data));
  } catch (err) {
    console.log(err.response.data.error);
  }
};
