document.querySelector('#boton').addEventListener('click', traerDatos());
console.log('correcto');

function traerDatos(){

    console.log('fff');
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET','https://www.datos.gov.co/resource/gt2j-8ykr.json',true );

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
   
            let datos = JSON.parse(this.responseText);
            console.log(datos);

            let res = document.querySelector('#res');
            res.innerHTML = '';
           for (let i of datos) {
               for(let j=0; j<=5; j++){
                res.innerHTML+= `
                <tr>
                     <td>${i.fecha_de_notificaci_n}</td>
                     <td>${i.ciudad_municipio_nom}</td>
                     <td>${i.recuperado}</td>
                     <td>${i.edad}</td>
                     <td>${i.sexo}</td>
                     <td>${i.fuente_tipo_contagio}</td>
                     <td>${i.estado}</td>
                     <td>${i.ubicacion}</td>
                 </tr>
                `
            }
            break;
          }   
           
          var object = { a: 1, b: 2, c: 3 };
           for (var i=0 in object) {
               
               console.log(object[i]);
           }
        }
    }
}