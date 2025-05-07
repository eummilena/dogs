import React, { useEffect, useState } from 'react'
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { PASSWORD_RESET } from '../../api';
import { Form, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';

const LoginPasswordReset = () => {

  const password = useForm()

  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const { error, loading, request } = useFetch;
  const navigate = useNavigate();


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');


    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) navigate('/login');
  }

  return (
    <section className='animeLeft'>
      <Head title='Resete a senha' />
      <h1 className='title'>Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova senha' type='password' name='password' {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset
