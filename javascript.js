
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
 
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}


function toggleRead(i){
    myLibrary[i].toggleRead();
    addDisplay();
}
function deleteBook(i){
    myLibrary.splice(i,1);
    addDisplay();
}


function addDisplay(){
    let library = document.querySelector('.container2');
    library.innerHTML = '';
    for (i=0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let newBook = document.createElement('div');
        newBook.innerHTML = `<p>${book.title}</p> <div>${book.author}</div> <div>${book.pages}</div>
         <div>${book.read ? "Read" : "Not Read Yet"}</div> <button class="delete-btn">delete</button> 
         <button class="toggle-btn" onclick = "toggleRead(${i})">Toggle Read</button> `;
        newBook.querySelector('.delete-btn').addEventListener('click', deleteBook);
        library.appendChild(newBook);

         
    };

}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let myBook =new Book(title, author, pages, read);
    myLibrary.push(myBook);
    addDisplay();
}

let addBook = document.querySelector('.addbook');
addBook.addEventListener('click', () => {
    let newbookform = document.querySelector('#new-book-form');
    newbookform.style.display = 'block';

} )

document.querySelector('.submit-btn').addEventListener ('click', function(event){
    event.preventDefault();
    addBookToLibrary();
} );

