import { useEffect, useState } from 'react';
import axios from 'axios';
import storage from '../utils/storage';
import { baseURL } from '../utils/api';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

const useLoadingWithRefresh = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const accessToken = storage.getItem('bookmark-user-key');
        if (!accessToken) {
          setLoading(false);
          return;
        }
        const { data } = await axios.get(`${baseURL}/users/me`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        dispatch(loginUser(data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);
  return { loading };
};

export default useLoadingWithRefresh;
