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
            this.saldo += parseFloat(deposito)
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
            this.saldo -= parseFloat(retiro)
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

const c1 = new CuentaBancaria("alvaro", 100)
const c2 = new CuentaBancaria("pedro", 5000)
const c3 = new CuentaBancaria("pepe", 10000)
const c4 = new CuentaBancaria("hector", 654)
const c5 = new CuentaBancaria("jose", 90)

const cuentas = [c1, c2, c3, c4, c5]
/*UI*/

// crearCuenta variables
const crearCuentaBtn = document.getElementById("crearCuentaBtn")
const formularioNuevaCuenta = document.getElementById("formularioNuevaCuenta")
const nombreTitular = document.getElementById("nombreTitularInp")
const saldoInicial = document.getElementById("saldoInicialInp")
const confirmarNuevaCuentaBtn = document.getElementById("confirmarNuevaCuentaBtn")
const cancelarNuevaCuentaBtn = document.getElementById("cancelarNuevaCuentaBtn")
const opacityForm = document.getElementById("opacityForm")

// userPanel variables
const userPanel = document.getElementById("userPanel")
const nombrePanelUsuario = document.getElementById("nombrePanelUsuario")
const saldoPanelUsuario = document.getElementById("saldoPanelUsuario")
const historialPanelUsuario = document.getElementById("historialPanelUsuario")
const opacityUserPanel = document.getElementById("opacityUserPanel")
const volverBtn = document.getElementById("volverBtn")

// renderizado de cuentas variables y funciones
const cuentasRegistradas = document.getElementById("cuentasRegistradas")
function renderizarCuentas(cuentas) {
    let id = -1
    cuentasRegistradas.innerHTML = ""
    cuentas.forEach(c => {
        id += 1
        const { titular } = c
        cuentasRegistradas.innerHTML += `
        <div class="card" id="${id}">
        <h3>${titular}</h3>
        <span>cuenta Nro ${id}</span>
        </div>
        `
    })
    clickCardShowUserPanel()
}

// crear cuenta
crearCuentaBtn.addEventListener("click", () => {
    formularioNuevaCuenta.classList.remove("inactive")
    opacityForm.classList.remove("inactive")
})

cancelarNuevaCuentaBtn.addEventListener("click", () => {
    formularioNuevaCuenta.classList.add("inactive")
    opacityForm.classList.add("inactive")
})

formularioNuevaCuenta.addEventListener("submit", (e) => {
    e.preventDefault()
})

confirmarNuevaCuentaBtn.addEventListener("click", () => {
    if (saldoInicial.value == "" || nombreTitular.value == "") {
        alert("campos vacios")
    } else if (saldoInicial.value < 0) {
        alert("El saldo inicial de la cuenta no puede ser negativo")
    } else if (saldoInicial.value >= 0) {
        cuentas.push(new CuentaBancaria(nombreTitular.value, parseFloat(saldoInicial.value)))
        nombreTitular.value = ""
        saldoInicial.value = ""
        formularioNuevaCuenta.classList.add("inactive")
        opacityForm.classList.add("inactive")
        renderizarCuentas(cuentas) //se renderizan las cuentas en #cuentasRegistradas
    } else {
        alert("Error inesperado, ingrese informacion valida");
    }

})

// ver cuenta
function clickCardShowUserPanel() {
    cuentasRegistradas.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", (e) => {
            const id = e.target.closest(".card").id
            userPanel.classList.remove("inactive")
            opacityUserPanel.classList.remove("inactive")
            renderizarPanelUsuario(id, cuentas)

        })
    })
}

function renderizarPanelUsuario(id, cuentas) {
    historialPanelUsuario.innerHTML = ""
    const { titular, saldo, historial } = cuentas[id]
    nombrePanelUsuario.innerText = titular
    saldoPanelUsuario.innerText = `$${saldo}`
    document.getElementById("id-usuario").innerText = id
    historial.forEach(o => {
        historialPanelUsuario.innerHTML += `<div>${o}</div>`
    })


}


volverBtn.addEventListener("click", () => {
    opacityUserPanel.classList.add("inactive")
    userPanel.classList.add("inactive")
})


// ingreso/retiro de dinero

const extraccionBtn = document.getElementById("extraccionBtn")
const depositoBtn = document.getElementById("depositoBtn")


extraccionBtn.addEventListener("click", () => {
    // id-usuario
    let monto = prompt("ingrese monto")
    let id = parseInt(document.getElementById("id-usuario").innerText)
    cuentas[id].retirar(monto)
    renderizarPanelUsuario(id, cuentas)
})

depositoBtn.addEventListener("click", () => {
    // id-usuario
    let monto = prompt("ingrese monto")
    let id = parseInt(document.getElementById("id-usuario").innerText)
    cuentas[id].depositar(monto)
    renderizarPanelUsuario(id, cuentas)
})

renderizarCuentas(cuentas) 