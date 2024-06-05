// 3) Crear un objeto Banco que contiene el nombre del banco y una lista de clientes (objetos de la
//     clase Cliente). Se debe crear una función llamada agregarCliente para añadir un cliente a la lista y
//     otra función llamada mostrarClientes que imprima la información de todos los clientes del banco.

function agregarCliente(banco, cliente) {
    banco.clientes.push(cliente)
}

function mostrarClientes(banco) {
    const { clientes } = banco
    console.log(`Lista de clientes del banco: ${banco.nombre}`);
    clientes.forEach(cliente => {
        const { nombre, dni, idCuenta } = cliente
        console.log(`nombre: ${nombre}, dni: ${dni}, numero de cuenta: ${idCuenta}`);

    });

}

class Banco {
    constructor(nombre) {
        this.nombre = nombre
        this.clientes = []
    }
}

class Cliente {
    constructor(nombre, dni, idCuenta) {
        this.nombre = nombre
        this.dni = dni
        this.idCuenta = idCuenta
    }
}

const banco = new Banco("Bank of Pepe")

const cliente1 = new Cliente("scorpion", 42000000, 1)
const cliente2 = new Cliente("subzero", 42000001, 2)
const cliente3 = new Cliente("kitana", 42000002, 3)
const cliente4 = new Cliente("jade", 42000003, 4)
const cliente5 = new Cliente("goro", 42000004, 5)
const cliente6 = new Cliente("pepe", 42000005, 6)

agregarCliente(banco, cliente1)
agregarCliente(banco, cliente2)
agregarCliente(banco, cliente3)
agregarCliente(banco, cliente4)
agregarCliente(banco, cliente5)
agregarCliente(banco, cliente6)

mostrarClientes(banco)
