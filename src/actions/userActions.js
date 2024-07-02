import { fetchUserDataApi } from '../mockApi';

export const fetchUserData = () => async dispatch => {
  try {
    const data = await fetchUserDataApi();
    dispatch({
      type: 'FETCH_USER_DATA_SUCCESS',
      payload: data
    });
  } catch (err) {
    dispatch({
      type: 'FETCH_USER_DATA_FAILURE',
      payload: 'Error fetching user data'
    });
  }
};