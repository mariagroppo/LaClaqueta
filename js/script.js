const formulario=document.getElementById('formulario');

formulario.addEventListener('submit',(e)=>{
  e.preventDefault();
  fetch('https://sheet.best/api/sheets/c09ca2ed-2c36-4941-940c-d92a7cc13d1e',
    {
      method:'POST',
      mode:'cors',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify({
        "nombre":formulario.nombre.value,
        "apellido":formulario.apellido.value,
        "email":formulario.email.value,
        "mensaje":formulario.mensaje.value,
      })
    }).then(
      setTimeout(function(){
        Swal.fire(
          'Muchas gracias!',
          'Mensaje enviado correctamente!',
          'success'
          )
      }, 2000)

    )
    formulario.reset();
    /* document.location.href ='/index.html'; */
});  

function apiFrase(){
  document.getElementById('apiFrase').innerHTML='';
  fetch('https://api.chucknorris.io/jokes/random')
    .then((res) => res.json())
    .then(json => {
      document.getElementById('apiFrase').innerHTML=json.value;
    })

}

      
     
      

		
	
	

        
   