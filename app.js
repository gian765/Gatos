import { gato } from "./clases/gatos";
const divgatos = document.querySelector('#gatos');
// creamos el objeto
const garfield = new gato("Garfield", "garfield.png");
garfield.comida = "pescado";
const tom = new gato("Tom", "tom.webp");
tom.comida = "albóndigas con salsa";
const silvestre = new gato("Silvestre", "silvestre.webp");
silvestre.comida = "asado";
const marie = new gato("Marie", "marie.webp")
marie.comida = "sushi";

const gatos = [garfield, tom, silvestre, marie];

document.addEventListener('DOMContentLoaded', () => {
    gatos.map(gato => {
        divgatos.innerHTML += `
        <div class="card" style="width: 18rem;">
             <img src="./imagenes/${gato.nombre}"</h5>
             <div class= "card-body">
                 <h5 class="card-title">${gato.nombre}</h5>
                 <p class="card-text">${gato.saludar()} y me gusta comer ${gato.comida} . </p>
                 <p class="card-text"> Te doy albóndigas.</p>
                 <p calss="card-text">${gato.comer('albondigas')}</p>
            </div>
        </div>
    ` ;
    })
})