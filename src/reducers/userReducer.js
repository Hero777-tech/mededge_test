const initialState = {
    userData: null,
    loading: true,
    error: null
  };
  
  export default function userReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'FETCH_USER_DATA_SUCCESS':
        return {
          ...state,
          userData: payload,
          loading: false,
          error: null
        };
      case 'FETCH_USER_DATA_FAILURE':
        return {
          ...state,
          userData: null,
          loading: false,
          error: payload
        };
      default:
        return state;
    }
  }