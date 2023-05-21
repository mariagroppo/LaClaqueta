function changeClass(){
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
}

function load_header() {
    document.getElementById("contenidoHeader").innerHTML=
        `
        <div class="containerHeader">
            <div class="containerLogo">
                <img class= "logo" src="./img/logo.jpeg" alt="muestra">
            </div>
            <nav id="site-nav" class="site_nav">
                <ul>
                    <li><a href="index.html"><i class="iconClass icon-star-empty"></i>Home</a></li>
                    <li><a href="gallery.html"><i class="iconClass icon-calendar"></i>Cartelera</a></li>
                    <li><a href="contactUs.html"><i class="iconClass icon-earth"></i>Contacto</a></li>
                </ul>
            </nav>
            <div id="menu-movil" class="menu-movil" onclick=changeClass()>
                <div class="movil_icon"></div>
            </div>
        </div>
         `
} 

function suscribeFunction() {
    let user = document.getElementById('username');
    /* console.log(user.value); */
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const swalMessage = Swal.mixin({
        customClass: {
          title: 'swalTitle',
        },
        buttonsStyling: false
      })
    if (validEmail.test(user.value) ){
        /* console.log("La dirección de email " + user.value + " es correcta."); */
        swalMessage.fire({
            title: 'Te has inscripto en el newsletter correctamente con el correo ' + user.value,
            showConfirmButton: false,
            timer: 4000,
        })
    } else {
        /* console.log("La dirección de email es incorrecta."); */
        swalMessage.fire({
            title: 'El correo ingresado es incorrecto. Por favor intentelo de nuevo.',
            showConfirmButton: false,
            timer: 4000,
        })
    };
    document.getElementById('username').reset();
}