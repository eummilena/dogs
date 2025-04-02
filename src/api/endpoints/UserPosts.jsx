import React from 'react'

const UserPosts = () => {
    const [username, setUserName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://dogsapi.origamid.dev/json/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: '',
                password: '',
                email: '',
            })

        }).then(response => {
            console.log(response)
            return response.json();
        }).then(json => {
           
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
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
              <input
              type='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar</button>
       
          <hr />
           
      
    </div>
  )
}

export default UserPosts
