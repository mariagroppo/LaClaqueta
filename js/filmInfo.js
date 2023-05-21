
function getData2(){
    let paths = window.location.href.split('=');
    let id = paths[paths.length-1];
    /* console.log(id) */
    
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', './img/info.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#containerFilm');
            res.innerHTML='';
            for(let i=0; i<datos.length; i++){
                if (datos[i].code === id) {
                    if (datos[i].estreno === 'SI') {
                        res.innerHTML+= `
                        <div class="container-title">
                            <h1>${datos[i].title}</h1>
                        </div>
    
                        <div class="container-img">
                            <div class="imgFilm">
                                <img class="filmImage" src="${datos[i].thumbnail}" alt="">    
                            </div>
                            <div class="filmDetails">
                                <span class="spanClass">${datos[i].access}</span>
                                <div>
                                    <ul>
                                        <li><span class="infoFilm">GÉNERO:</span> ${datos[i].gender}</li>
                                        <li><span class="infoFilm">DURACIÓN:</span> ${datos[i].duration}</li>
                                        <li><span class="infoFilm">ACTORES:</span> ${datos[i].actors}</li>
                                        <li><span class="infoFilm">DIRECTOR:</span> ${datos[i].director}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="layout2">
                                <div class="container-info">
                                    <p>${datos[i].description}</p>
                                </div>
                                <div class="container-video">
                                    <div class="videoStyle">
                                        <iframe src=${datos[i].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    
                                </div>
                                <div class="bookForm">
                                    <div class="bookForm_1">
                                        <div class="ticketsQty">
                                            <div class="ticketsQty1">
                                                <label>Cantidad de entradas</label>
                                                <span class="spanTickets">Máximo 10 entradas.</span>
                                            </div>    
                                            <button type="button" id="btnRest" name="btnRest" class="btnRest">-</button>
                                            <input type='number' class="qtyInput" id="qtyInput1" value="0">
                                            <button type="button" id="btnSum" name="btnSum" class="btnSum">+</button>
                                        </div>
                                        <div class="dayTime">
                                            <label for="">Día y horario</label>
                                            <select name="" id="dayTime">
                                                <option id="dayTime">${datos[i].dia1}</option>
                                                <option id="dayTime">${datos[i].dia2}</option>
                                                <option id="dayTime">${datos[i].dia3}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="btnLayout2">
                                        <button class="btnBook" id="btnBook" id="btnBook">RESERVAR</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div class="layout1">
                            <div class="container-info">
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                            </div>
                            
                            <div class="container-video">
                                <div class="videoStyle">
                                    <iframe src="${datos[i].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="bookForm">
                                    <div class="bookForm_1">
                                        <label>Cantidad de entradas</label>
                                        <span class="spanTickets">Máximo 10 entradas.</span>
                                        <div class="ticketsQty">
                                            <button type="button" id="btnRest" name="btnRest" class="btnRest">-</button>
                                            <input type='number' class="qtyInput" id="qtyInput2" value="0">
                                            <button type="button" id="btnSum" name="btnSum" class="btnSum">+</button>
                                        </div>
                                        <div class="dayTime">
                                            <label for="">Día y horario</label>
                                            <select name="" id="dayTime">
                                                <option id="dayTime">${datos[i].dia1}</option>
                                                <option id="dayTime">${datos[i].dia2}</option>
                                                <option id="dayTime">${datos[i].dia3}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="btnLayout2">
                                        <button class="btnBook" id="btnBook" id="btnBook">RESERVAR</button>
                                    </div>
                                </div>
    
                        </div>
    
                        `
                    } else {
                        res.innerHTML+= `
                        <div class="container-title">
                            <h1>${datos[i].title}</h1>
                        </div>
    
                        <div class="container-img">
                            <div class="imgFilm">
                                <img class="filmImage" src="${datos[i].thumbnail}" alt="">    
                            </div>
                            <div class="filmDetails">
                                <span class="spanClass">${datos[i].access}</span>
                                <div>
                                    <ul>
                                        <li><span class="infoFilm">GÉNERO:</span> ${datos[i].gender}</li>
                                        <li><span class="infoFilm">DURACIÓN:</span> ${datos[i].duration}</li>
                                        <li><span class="infoFilm">ACTORES:</span> ${datos[i].actors}</li>
                                        <li><span class="infoFilm">DIRECTOR:</span> ${datos[i].director}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="layout2">
                                <div class="container-info">
                                    <p>${datos[i].description}</p>
                                </div>
                                <div class="container-video">
                                    <div class="videoStyle">
                                        <iframe src=${datos[i].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div class="layout1">
                            <div class="container-info">
                                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                            </div>
                            
                            <div class="container-video">
                                <div class="videoStyle">
                                    <iframe src="${datos[i].trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
    
                        `    
                    }

                }
            }
        }
    }
}


document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === 'btnBook') {
        let ticketsQty = document.getElementById('qtyInput1').value;
        let dayTime = document.getElementById('dayTime').value;
        
        Swal.fire({
            title: 'Si desea reservar ' + ticketsQty + ' entradas para el próximo ' + dayTime + ', ingrese su correo electrónico.',
            input:"email",
            inputValidator: (value)=>{
                let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
                let isOK = expReg.test(value);
                return !isOK && '¡Verifica el correo electrónico ingresado.!'
            },
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Reservar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Reservado! Se enviará un correo a ' + result.value + ' con los pasos a seguir.', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Ha cancelado el proceso.', '', 'error')
            }
            document.getElementById('qtyInput').value="0"

          })
    
    }
})

document.addEventListener("click", (event) => {
    
    let counter1 = document.getElementById('qtyInput1');
    let counter2 = document.getElementById('qtyInput2');
    const clickedElement = event.target;
    if (clickedElement.id === 'btnSum') {
        if (counter1.value > 0 ) {
            if (counter1.value > 9 ) {
                counter1.value=10;
                counter2.value=counter1.value
            } else {
                counter1.value=parseInt(counter1.value)+1;
                counter2.value=counter1.value
            }
        } else {
            counter1.value=parseInt(1);
            counter2.value=counter1.value
        }
        
    } else if (clickedElement.id === 'btnRest') {
        /* console.log(clickedElement)
        console.log("btnRest")
        console.log(counter.value) */
        if (counter1.value > 0 ) {
            counter1.value=parseInt(counter1.value)-1;
            counter2.value=counter1.value
        } else {
            counter1.value=0;
            counter2.value=counter1.value
        }
    }
    
  });