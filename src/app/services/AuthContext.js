import React, { createContext, useState, useCallback } from 'react';
import {jwtDecode} from "jwt-decode"; // Correct import statement
import { useNavigate } from 'react-router-dom';
import {environment} from '../environment/environment';

const AuthContext = createContext();
const API_Url = environment.Base_Url;

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const [authTokens, setAuthTokens] = useState(() => JSON.parse(localStorage.getItem('authTokens')) || null);
    const [user, setUser] = useState(() => authTokens ? jwtDecode(authTokens.access) : null);
    const history = useNavigate();

    const loginUser = useCallback(async (e) => {
        if (e) {
            e.preventDefault();
        }
        try {
            const response = await fetch(`${API_Url}/adm/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'username': e?.target.username.value, 'password': e?.target.password.value})
            });
            if (!response.ok) {
                throw new Error('Failed to login');
            }
            const data = await response.json();
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            history('/dashboard');
        } catch (error) {
            history('/')
            console.error('Login failed:', error);
            
        }
    }, [history]);

    const logoutUser = useCallback(() => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens'); 
        history('/');
    }, [history]);

    const FetchData = async (urlpath) => { 
        try {
            const response = await fetch(`${API_Url}/${urlpath}`,
            {method: 'Post'});
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data
           
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const GetData = async (Data,urlpath) => {
        try {

            const response = await fetch(`${API_Url}/${urlpath}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data
            
        } catch (error) {
            console.error('fetch data failed:', error);
           
        }
    };

    const insert = async (Data,urlpath,History = null) => {
        try {
          const response = await fetch(`${API_Url}/${urlpath}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
          });
      
          if (!response.ok) {
            throw new Error('Failed to create ');
          }
          history(History) 
        } catch (error) {
          console.error(' creation failed:', error);
        }
      };

      const update = async (Data,urlpath,History = null) => {
        
        try {
            const response = await fetch(`${API_Url}/${urlpath}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Data)
            });
            if (!response.ok) {
                console.log(response);
                throw new Error('Failed to  update');
            }
            
            history(History);
        } catch (error) {
            console.error(' update failed:', error);
        
        }
    }

    const Delete = async (Data,urlpath,History=null) => {
        try {

                const response = await fetch(`${API_Url}/${urlpath}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Data)
                });
                if (!response.ok) {
                    throw new Error('Failed to delete ');
                }
                history(History);
            
        } catch (error) {
            console.error('Delete operation failed:', error);
           
        }
    };

    return (
        <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser, FetchData,insert,Delete,GetData,update }}> {/* Provide getData in context value */}
            {children}
        </AuthContext.Provider>
    );

}