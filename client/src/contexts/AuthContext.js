import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { authReducers } from '../reduces/authReduce';
import {
  API_URL,
  LOCAL_STORAGE_ACCESS_TOKEN_NAME,
  LOCAL_STORAGE_REFRESH_TOKEN_NAME,
} from './constants';
import setAuthToken from '../utils/setAuthToken';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducers, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  // Authenticate user
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_ACCESS_TOKEN_NAME]) {
      setAuthToken(localStorage[LOCAL_STORAGE_ACCESS_TOKEN_NAME]);
    }
    try {
      const response = await axios.get(`${API_URL}/user/get-user`);
      console.log(response.data);
      if (response.data.success) {
        dispatch({
          type: 'SET_AUTH',
          payload: { isAuthenticated: true, user: response.data.user },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_NAME);
      localStorage.removeItem(LOCAL_STORAGE_REFRESH_TOKEN_NAME);
      setAuthToken(null);
      dispatch({
        type: 'SET_AUTH',
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };
  useEffect(() => loadUser(), []);

  // login
  const loginUser = async userForm => {
    try {
      const response = await axios.post(`${API_URL}/login`, userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_ACCESS_TOKEN_NAME,
          response.data.token.accessToken
        );
        localStorage.setItem(
          LOCAL_STORAGE_REFRESH_TOKEN_NAME,
          response.data.token.refreshToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  //logout
  const logoutUser = async () => {
    try {
      if (localStorage[LOCAL_STORAGE_ACCESS_TOKEN_NAME]) {
        localStorage.clear();
        setAuthToken(null);
        dispatch({
          type: 'SET_AUTH',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
      return { success: true, message: 'Logged out' };
    } catch (error) {
      if (error) return error;
    }
  };

  const authContextData = { loginUser, authState, logoutUser };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;