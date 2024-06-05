// 2) Crear un objeto Libro que contiene el título y el autor. Se debe crear una función llamada
// mostrarInfo que imprima la información del libro.

function showInfo(book) {
    const { title, author } = book
    console.log(`Title of the book: ${title}`);
    console.log(`Written by: ${author}`);
}

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
}

const book1 = new Book("The call of cthulhu", "H.P. Lovecraft")

showInfo(book1)
