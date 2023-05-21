/* document.querySelector('#btnJSON').addEventListener('click', getData); */
/* Si adentro pongo getData(), ejecuta la funcion automáticamente, es decir, sin hacer click */

function getData(){
    /* Instanciamos nuestro objeto */
    let xhttp = new XMLHttpRequest();
    /* Carga la info del archivo json */
    xhttp.open('GET', './img/info.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        /* Estad 4: respuesta terminada y respuesta correcta.
        Estad0: OK */
        if(this.readyState == 4 && this.status == 200){
           let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#respuesta');
            let res2 = document.querySelector('#respuesta2');
            res.innerHTML='';
            res2.innerHTML='';
            for(let i=0; i<datos.length; i++){
                if (datos[i].estreno === "SI") {
                    res.innerHTML+= `
                    <div class="tarjeta">
                        <div>
                            <form class="imgForm" action="./filmInfo.html" method="get">
                                <input type="hidden" name="id" value="${datos[i].code}">
                                <button type="submit" class="btn btn-primary m-2 col"><img class= "posterImg" src="${datos[i].thumbnail}" alt="${datos[i].title}" ></button>
                            </form>
                            <div class="titulo">${datos[i].title}</div>
                        </div>
                        <div class="pie">
                            <p>ESTA SEMANA</p>
                        </div>
                    </div>
                    `
                }
            }
            for(let i=0; i<datos.length; i++){
                if (datos[i].estreno === "NO") {
                    res2.innerHTML+= `
                    <div class="tarjeta">
                        <div>
                            <form class="imgForm" action="./filmInfo.html" method="get">
                                <input type="hidden" name="id" value="${datos[i].code}">
                                <button type="submit" class="btn btn-primary m-2 col"><img class= "posterImg" src="${datos[i].thumbnail}" alt="${datos[i].title}" ></button>
                            </form>
                            <div class="titulo">${datos[i].title}</div>
                        </div>
                    </div>
                    `
                }
            }
        }
    }
    
}