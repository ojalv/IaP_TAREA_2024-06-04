/*
5) Gestión de Alumnos
Enunciado:
Desarrolle una clase Alumno y una clase GestiónAlumnos que permitan realizar las siguientes
operaciones:
Clase Alumno:
Almacenar la información de un alumno:
Número de matrícula
Nombre del alumno
Apellidos del alumno
Fecha de nacimiento
Notas de las asignaturas (en un array)
Calcular la media de las notas del alumno.
Permitir consultar la información del alumno.
Clase GestiónAlumnos:
Almacenar un conjunto de alumnos.
Agregar nuevos alumnos a la gestión.
Eliminar alumnos de la gestión.
Buscar alumnos por número de matrícula o nombre.
Actualizar las notas de un alumno en una asignatura específica.
Mostrar un listado de todos los alumnos en la gestión.
Mostrar la media general de las notas de todos los alumnos.
*/

class Asignatura {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
    }
}

class Alumno {
    constructor(matricula, nombre, apellidos, fechaNacimiento, notas = []) {
        this.notas = notas
        this.matricula = matricula
        this.nombre = String(nombre)
        this.apellidos = String(apellidos)
        this.fechaNacimiento = String(fechaNacimiento)
    }

    avg() {
        const l = this.notas.length
        if (l > 0) {
            let sum = 0
            this.notas.forEach(nota => {
                sum += nota
            });
            const prom = sum / l
            return prom
        }
    }
    info() {
        const { matricula, nombre, apellidos, fechaNacimiento } = this
        console.log(`
matricula: ${matricula}
nombre: ${nombre}
apellidos: ${apellidos}
fecha de nacimiento: ${fechaNacimiento}
notas: ${this.notas}
promedio: ${this.avg()}`);
    }


}


class GestiónAlumnos {
    constructor(alumnos = []) {
        this.alumnos = alumnos
    }

    add(alumno) {
        this.alumnos.push(alumno)
    }

    remove(matricula) {
        const index = this.alumnos.findIndex((alumno) =>
            alumno.matricula === matricula
        )

        if (index == -1) {
            console.log("Matricula no encontrada");
        } else if (index >= 0) {
            alumnos.splice(index, 1)
        }

    }

    findById(matricula) {
        const index = this.alumnos.findIndex((alumno) =>
            alumno.matricula === matricula
        )

        if (index == -1) {
            console.log("Matricula no encontrada");
        } else if (index >= 0) {
            return alumnos[index]
        }

    }
    findByName(nombreAlumno) {
        const index = this.alumnos.findIndex((alumno) => alumno.nombre === nombreAlumno)

        if (index == -1) {
            console.log("Nombre no encuntrado");
        } else if (index >= 0) {
            return alumnos[index]
        }
    }
    students() {
        console.log("");
        this.alumnos.forEach(alumno => { console.log(`${alumno.nombre} ${alumno.apellidos}`); })
    }

    avg() {

        const la = this.alumnos.length
        let ln = 0
        if (la > 0) {
            let sum = 0
            this.alumnos.forEach((alumno) => { ln += alumno.notas.length; alumno.notas.forEach((nota) => { sum += nota; }) })
            if (ln > 0) {
                const prom = sum / ln
                console.log(`\n${prom}`);
                return prom
            }
        }
    }
    generalAvg() {
        console.log(`Media general de notas: ${this.avg()}`);
    }

    updateStudentScore(matricula, idMateria, nuevaNota) {
        let index = -1
        index = this.alumnos.findIndex((alumno) => alumno.matricula === matricula)
        if (index >= 0) {
            this.alumnos[index].notas.splice(idMateria, 1, nuevaNota)
        }

    }
}





//Clase Alumno:
// Almacenar la información de un alumno:
//(Número de matrícula, Nombre del alumno, Apellidos del alumno, Fecha de nacimiento, Notas de las asignaturas (en un array))
const a1 = new Alumno(1, "alvaro", "ojeda", "09/09/1999", [10, 9, 10, 5])
const a2 = new Alumno(2, "jhon", "uberman", "12/12/1989", [10, 9, 10, 5])
const a3 = new Alumno(3, "hector", "uberman", "03/04/1979", [10, 9, 10, 5])
const a4 = new Alumno(6, "juan", "travolta", "10/10/2000", [10, 9, 10, 5])
const a5 = new Alumno(88, "abril", "vera", "19/03/1654", [10, 9, 10, 5])
const a6 = new Alumno(150, "walter", "messi", "05/05/1988", [10, 9, 10, 5])

// Calcular la media de las notas del alumno.
console.log(a1.avg())
// Permitir consultar la información del alumno.
a1.info()

// Clase GestiónAlumnos:
// (Almacenar un conjunto de alumnos)
alumnos = [a1, a2, a3, a4, a5]
claseA = new GestiónAlumnos(alumnos)

// Agregar nuevos alumnos a la gestión.
claseA.add(a6)

// Eliminar alumnos de la gestión.
claseA.remove(88)

// Buscar alumnos por número de matrícula o nombre.
claseA.findById(2).info()
claseA.findByName("juan").info()

// Actualizar las notas de un alumno en una asignatura específica.
claseA.updateStudentScore(6, 3, 10)
claseA.findByName("juan").info()

// Mostrar un listado de todos los alumnos en la gestión.
claseA.students()

// Mostrar la media general de las notas de todos los alumnos.
claseA.avg()