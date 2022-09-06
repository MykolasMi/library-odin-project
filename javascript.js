const bookName = document.getElementById('name');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

const submitButton = document.getElementById('submitButton');

const form = document.getElementById('form');
const table = document.getElementById('table');

let library = [
    {
        bookName: 'The Hunger Games',
        author: 'Suzanne Collins',
        pages: '374',
        read: true
    }
];

function newBook(bookName, author, pages, read) {
    this.bookName = bookName.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.checked;

    console.log("f.book");
}

function addBookToLibrary () {
    let book = new newBook(bookName, author, pages, read);
    library.push(book);
    displayBooks();

    console.log("f.addBookToLibrary");
    console.log(book);
}

//book.prototype = Object.create(addBookToLibrary.prototype)

form.addEventListener('submit', function(e){
    e.preventDefault();
    //let book = new newBook(bookName, author, pages, read);
    addBookToLibrary();

    console.log("submitButton")
})

let i = 0;
function displayBooks () {
    for(i; i<library.length; i++) {
        const row = document.createElement('tr')
        const cBookName = document.createElement('td');
        const cAuthor = document.createElement('td');
        const cPages = document.createElement('td');
        const cRead = document.createElement('td');
        const button = document.createElement('button');
        button.setAttribute('type', 'button');

        //card.classList.add('STYLING');
        cBookName.textContent = library[i].bookName;
        cAuthor.textContent = library[i].author;
        cPages.textContent = library[i].pages;
        cRead.textContent = library[i].read;
        
        table.appendChild(row);

        row.append(cBookName); //neleidzia append child metodo ant row, ant kitu irgi neleidzia bbz kodel. yra priezastis, reik praeiti pro dom manipulation 
        row.append(cAuthor);
        row.append(cPages);
        row.append(cRead);
        row.append(button);

        console.log('loop');
    }
    console.log('f.displayBooks')
}