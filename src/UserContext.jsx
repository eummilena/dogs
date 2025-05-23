import React, { createContext, useCallback, useEffect } from 'react'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext();


export const UserStorage = ({ children }) => {

  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();




  async function getUSer(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem('token', token);
      await getUSer(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false)
    } finally {
      setLoading(false);
    }

  }

  const userLogout = useCallback(async function () {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    async function autoLogin() {

      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido')
          await getUSer(token);

        } catch (err) {
          userLogout();
          console.log(err);

        } finally {
          setLoading(false);

        }

      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout])


  return <UserContext.Provider value={{ userLogin, data, userLogout, loading, login, error }}>{children}</UserContext.Provider>
}

export default UserContext
