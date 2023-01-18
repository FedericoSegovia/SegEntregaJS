const productos = [
    {nombre: "Monitor Samsung", precio: 43000},
    {nombre: "Placa de video MSI", precio: 70000},
    {nombre: "Notebook MSI Katana", precio: 360000},
    {nombre: "Gabinete MSI MAG Vampiric", precio: 11000},
];

let carrito =[]

let eleccion =prompt("¡Bienvenido a Fantech! ¿Desea comprar algun producto?")

while(eleccion != "si" && eleccion!= "no"){
    alert("Por favor ingresar si o no ")
    eleccion =prompt("Gracias por elegirnos! desea comprar algo si o no")
}

if(eleccion == "si"){
    alert("a continuacion le mostramos los productos")
listaProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")

alert(listaProductos.join(" - "))
} else if (eleccion == "no"){

alert("¡Gracias por su visita!")

}

while(eleccion !="no"){

let producto = prompt("Agrega un producto a tu carrito( Tiene que utilizar el nombre de la lista)")
let precio = 0;
if(producto =="Monitor Samsung" || producto == "Placa de video MSI" || producto == "Notebook MSI Katana" || producto == "Gabinete MSI MAG Vampiric"){

    switch(producto){
        case "Monitor Samsung":
            precio = 43000;
            break;
            
            case "Placa de video MSI":
            precio = 70000;
            break;

            case "Notebook MSI Katana":
            precio = 360000;
            break;

            case "Gabinete MSI MAG Vampiric":
            precio = 11000;
            break;

            
    }
   let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?")) 
   

carrito.push({producto, unidades , precio})
  
console.log(carrito) 
}else {
    alert("No disponemos de ese producto")
}

eleccion = prompt("¿Desea seguir comprando?")

while(eleccion =="no"){
    alert("¡Gracias por su compra!")
carrito.forEach((carritoTotal) =>{

    console.log(`producto : ${carritoTotal.producto}, unidades :${carritoTotal.unidades}
    total a pagar por producto ${carritoTotal.unidades * carritoTotal.precio}`)
}) 

break;

}
}

const total = carrito.reduce((acc , el) => acc + el.precio * el.unidades , 0)

console.log(`El total a pagar es : ${total}`)
alert(`El total a pagar es : ${total}`)