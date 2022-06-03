export const authReducers = (state, action) => {
  const {
    type,
    payload: { isAuthenticated, user },
  } = action;
  switch (type) {
    case 'SET_AUTH':
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
      };
    case 'SET_LOADING':
      return {
        ...state,
        authLoading: true,
        isAuthenticated,
        user,
      };
    case 'SET_STOP_LOAD':
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
      };
    default:
      return state;
  }
};
