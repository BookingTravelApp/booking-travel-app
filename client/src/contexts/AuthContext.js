import { createContext, useReducer } from 'react';
import axios from 'axios';
import { authReducers } from '../reduces/authReduce';
import {
  apiUrl,
  localStorageAccessTokenName,
  localStorageRefreshTokenName,
} from './constants';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [AuthState, dispatch] = useReducer(authReducers, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });
  // login
  const loginUser = async userForm => {
    try {
      const response = await axios.post(`${apiUrl}/login`, userForm);
      if (response.data.success) {
        localStorage.setItem(
          localStorageAccessTokenName,
          response.data.accessToken
        );
        localStorage.setItem(
          localStorageRefreshTokenName,
          response.data.refeshToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  const authContextData = { loginUser };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
