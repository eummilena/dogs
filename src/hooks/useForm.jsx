import React from 'react'


const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um e-mail inválido',
    },
    password: {
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/,
        message: 'A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 dígito. Com no mínimo 8 caracteres.',
    },
    number: {
        regex: /^\d+$/,
        message: 'Utilize números apenas'
    }

}

// types[type] é a mesma coisa que types.email

const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(null);

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha uma valor');
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true
        }
    }



    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default useForm
