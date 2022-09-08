const bookName = document.getElementById('name');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

const submitButton = document.getElementById('submitButton');
const addButton = document.getElementById('add');

const form = document.getElementById('form');
const table = document.getElementById('table');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const libraryContainer = document.querySelector('.libraryContainer')

form.classList.toggle('noDisplay')

addButton.addEventListener("click", function(e) {
    e.preventDefault();
    form.classList.toggle('noDisplay');
    body.classList.toggle('darker');
    addButton.classList.toggle('darker');
})

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


form.addEventListener('submit', function(e){
    e.preventDefault();
    addBookToLibrary();
    form.classList.toggle('noDisplay');
    body.classList.toggle('darker');
    addButton.classList.toggle('darker');

    console.log("submitButton");
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
        const buttonIcon = document.createElement('span')

        //card.classList.add('STYLING');
        cBookName.textContent = library[i].bookName;
        cAuthor.textContent = library[i].author;
        cPages.textContent = library[i].pages;
        cRead.textContent = library[i].read;

        buttonIcon.textContent = "delete_forever";
        buttonIcon.setAttribute('class', 'material-symbols-outlined');
        button.setAttribute('type', 'button');
        /*button.setAttribute()
        cBookName.setAttribute()
        cAuthor.setAttribute()
        cPages.setAttribute()
        cRead.setAttribute()*/
        
        table.appendChild(row);
        button.appendChild(buttonIcon);
        row.appendChild(cBookName);
        row.appendChild(cAuthor);
        row.appendChild(cPages);
        row.appendChild(cRead);
        row.appendChild(button);

        button.addEventListener("click", function(e) {
            table.removeChild(row);
            console.log(e.datasetkey)
        })

        console.log('loop');
    }
    console.log('f.displayBooks');
}