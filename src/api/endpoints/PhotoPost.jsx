import React from 'react'

const PhotoPost = () => {

  const [token, setToken] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');

     function handleSubmit(event) {
        event.preventDefault();

       const formData = new FormData();
       formData.append('img', img);
       formData.append('nome', nome);
       formData.append('peso', peso);
       formData.append('idade', idade);
       formData.append('img', img);

        fetch('https://dogsapi.origamid.dev/json/api/photo', {
            method: 'POST',
            headers: {
               Authorization: 'Bearer ' + token
            },
         body: {
            img: 'FORM_DATA',
           nome: '',
           peso: '',
           idade: '',
  },
            })

        .then(response => {
            console.log(response)
            return response.json();
        }).then(json => {
           
            return json;
        })


    }

  return (
    <form onSubmit={handleSubmit}>
          <input
              type='text'
              placeholder='token'
              value={token}
              onChange={(e) => setToken(e.target.value)}
          />
              <input
              type='text'
              placeholder='nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
          />
              <input
              type='text'
              placeholder='peso'
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
      />
         <input
              type='text'
              placeholder='idade'
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
      />
       <input
              type='file'
              onChange={({target}) => setImg(target.files[0])}
          />
          <button>Enviar</button>
       
        
           
      
    </form>
  )
}

export default PhotoPost
