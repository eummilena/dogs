import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/Input';
import Button from '../forms/Button';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error';
import styles from './LoginForm.module.css'
import stylesBtn from '../../components/forms/Button.module.css'
import Head from '../Helper/Head';


const LoginForm = () => {

    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext)



    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }



    return (
        <section className='animeLeft' >
            <Head title='Login' />
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disable>Carregando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )
                }
                <Error error={error && 'Dados incorretos.'} />
            </form>
            <Link className={styles.perdeu} to="/login/perdeu">Perdeu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
            </div>

        </section>
    )
}

export default LoginForm
