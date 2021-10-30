import apiCalls from '../../utils/api';
import { loginUser, setLoading, setLoadingFalse } from '../slices/authSlice';

export const login = async (body, dispatch, alert = null) => {
  try {
    dispatch(setLoading());
    const { data } = await apiCalls.loginUser(body);
    dispatch(loginUser(data));
    dispatch(setLoadingFalse());
  } catch (err) {
    dispatch(setLoadingFalse());
    alert.error(
      (err.response && err.response.data.error) || 'Something Went Wrong'
    );
    console.log(err.response.data.error);
  }
};
