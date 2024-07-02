import { loginApi, registerApi } from '../mockApi';

export const login = (email, password) => async dispatch => {
  try {
    const data = await loginApi(email, password);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: data
    });
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL' });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
  try {
    const data = await registerApi(name, email, password);
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: data
    });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL' });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: 'LOGOUT' });
};