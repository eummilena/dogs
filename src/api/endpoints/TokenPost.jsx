import React from 'react'

const TokenPost = () => {
 const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
            })

        }).then(response => {
            console.log(response)
            return response.json();
        }).then(json => {
            setToken(json.token)
            console.log(json.token)
            return json;
        })


    }

  return (
    <div>
                   <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUserName(e.target.value)}
          />
           <input
              type='text'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar</button>
          <p>{ token}</p>
    </div>
  )
}

export default TokenPost
