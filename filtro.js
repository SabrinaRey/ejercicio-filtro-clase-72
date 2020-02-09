// A partir de la siguiente lista de productos, 
// hacer una web siguiendo el maquetado de ejemplo. 

// Al escribir en el input el color o el tipo de un producto, 
// se deben filtrar los productos. 
// Funciona tanto apretando enter como haciendo clic en el boton. 



const productos = [
  {
    nombre: 'Zapato negro',
    tipo: 'zapato',
    color: 'negro',
    img: './img/taco-negro.jpg',
  },
  {
    nombre: 'Zapato azul',
    tipo: 'zapato',
    color: 'azul',
    img: './img/taco-azul.jpg',
  },
  {
    nombre: 'Bota negra',
    tipo: 'bota',
    color: 'negro',
    img: './img/bota-negra.jpg',
  },
  { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
  {
    nombre: 'Zapato rojo',
    tipo: 'zapato',
    color: 'rojo',
    img: './img/zapato-rojo.jpg',
  },
];

const tarjetaDeProductos = document.getElementById("productos")
const formCalzado = document.getElementById("filtro")
const inputBuscado = document.getElementById("buscado")


const divProductos = (productSeleccionado) => {
  let acumuladora = " "
  productSeleccionado.forEach(product => {
    acumuladora += `
  <div>
  <img src=${product.img} alt=${product.nombre}>
  <h3>${product.nombre}</h3>
   </div>`

  })
  return acumuladora
}

tarjetaDeProductos.innerHTML = divProductos(productos);


const filtroCalzados = (value) => {
  let arraySeleccionados = [];
  arraySeleccionados = productos.filter((calzado) => {
    if (calzado.tipo.includes(value) || calzado.color.includes(value) || calzado.nombre.toLowerCase().includes(value))
      return arraySeleccionados


  })
 
  tarjetaDeProductos.innerHTML = divProductos(arraySeleccionados)
  
}



formCalzado.onsubmit = e => {
  e.preventDefault()
  filtroCalzados(inputBuscado.value)

}



















