// 1) Saludo: Crear objeto cliente que contiene su nombre y edad. Se debe crear una función
// llamada saludarCliente que imprima un mensaje de saludo utilizando la información
// proporcionada en el objeto.
function saludarCliente(cliente) {
    const { nombre, edad } = cliente
    console.log(`Hola ${nombre} de ${edad} anios`);
}

class Cliente {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

let cliente1 = new Cliente("Alvaro", 24)

saludarCliente(cliente1)