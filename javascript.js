const form = document.getElementById('form');

const bookName = document.getElementById('name');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

let library = [];

function book(bookName, author, pages, read) {
    this.bookName = bookName
    this.author = author
    this.pages = pages
    this. read = read

    this.conCat(library);
}

function addBook () {
    console.log('addBook');

    new book(bookName, author, pages, read)
}

form.addEventListener('submit', function() {
    addBook()
})
