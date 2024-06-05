// 4) Cuenta Bancaria
// Enunciado:
// Desarrolle una clase CuentaBancaria que permita realizar las siguientes operaciones:
// Apertura de cuenta:
// La apertura de la cuenta debe requerir el nombre del titular y el saldo inicial.
// El saldo inicial debe ser un valor positivo.
// Consulta de saldo:
// Debe permitir consultar el saldo actual de la cuenta.
// Depósito:
// Debe permitir realizar depósitos en la cuenta.
// El monto del depósito debe ser un valor positivo.
// Retiro:
// Debe permitir realizar retiros de la cuenta.
// El monto del retiro no debe superar el saldo disponible.
// Se debe mostrar un mensaje en caso de que el retiro sea superior al saldo disponible.
// Restricciones:
// No se deben permitir retiros que dejen la cuenta con saldo negativo.
// Se debe registrar el historial de operaciones (depósitos y retiros) en un array.

class CuentaBancaria {
    constructor(titular, saldo) {
        this.historial = []
        this.titular = titular
        if (saldo < 0) {
            console.error("El saldo inicial de la cuenta no puede ser negativo, se establecera en cero y luego podra realizar depositos y retiros de dinero con normalidad")
            this.saldo = 0
        } else if (saldo === 0) {
            this.saldo = 0
        } else if (saldo > 0 && typeof (saldo) === "number") {
            this.saldo = saldo
            this.historial.push(`+${saldo}`)
        } else {
            console.error("Error inesperado, el saldo se establecera en cero y luego podra realizar depositos y retiros de dinero con normalidad");
            this.saldo = 0
        }
    }

    consultarSaldo() {
        const { saldo } = this
        console.log(`Saldo: $${saldo}`);
    }

    depositar(deposito) {
        if (deposito < 0) {
            console.error("operacion invalida, no puede ingresar montos negativos")
        } else if (deposito === 0) {
            console.error("operacion invalida, no puede ingresar montos nulos")
        } else if (deposito > 0) {
            this.saldo += deposito
            this.historial.push(`+${deposito}`)
        } else {
            console.error("Error inesperado, operacion anulada");
        }
    }

    retirar(retiro) {
        if (retiro < 0) {
            console.error("operacion invalida, no puede ingresar montos negativos")
        } else if (retiro === 0) {
            console.error("operacion invalida, no puede ingresar montos nulos")
        } else if (retiro > 0 && this.saldo >= retiro) {
            this.saldo -= retiro
            this.historial.push(`-${retiro}`)
        } else if (retiro > 0 && this.saldo < retiro) {
            console.error("Fondos insuficientes para realizar la operacion")
        } else {
            console.error("Error inesperado, operacion anulada");
        }
    }

    mostrarHistorial() {
        console.log(`Historial de operaciones de ${this.titular}`);
        this.historial.forEach(operacion => {
            console.log(operacion);
        })
    }

}

const cuenta1 = new CuentaBancaria("pepe", 101)

cuenta1.consultarSaldo()
cuenta1.depositar(200)
cuenta1.consultarSaldo()
cuenta1.retirar(300)
cuenta1.consultarSaldo()
cuenta1.mostrarHistorial()