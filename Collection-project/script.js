const books = [{
    cover: 'https://m.media-amazon.com/images/P/B07PMZZX2Z.01._SCLZZZZZZZ_SX500_.jpg',
    title: 'Red at the Bone',
    autor: 'Jacqueline Woodson',
    pages: '207 pages',
    genre: 'Contemporary',
    summary: ''
},{
    cover: 'https://media.s-bol.com/myPVjmko951E/550x824.jpg',
    title: 'White Tears Brown Scars',
    autor: 'Ruby Hamad',
    pages: '304 pages',
    genre: 'Nonfiction',
    summary: ''
},{
    cover: 'https://www.penguin.co.uk/content/dam/prh/books/108/1089317/9781784876371.jpg.transform/PRHDesktopWide_small/image.jpg',
    title: 'Revenge',
    autor: 'Yōko Ogawa',
    pages: '162 pages',
    genre: 'Horror',
    summary: ''
},{
    cover: 'https://images-na.ssl-images-amazon.com/images/I/51cNWsPbd0L._SX324_BO1,204,203,200_.jpg',
    title: 'All Passion Spent',
    autor: 'Vita Sackville-West',
    pages: '178 pages',
    genre: 'Classics',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1344260501l/15790264.jpg',
    title: 'Stoner',
    autor: 'John Williams',
    pages: '288 pages',
    genre: 'Classics',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433620296l/25678602._SY475_.jpg',
    title: 'Etta and Otto and Russell and James',
    autor: 'Emma Hooper',
    pages: '293 pages',
    genre: 'Contemporary',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1528249620l/1372679._SY475_.jpg',
    title: 'Love',
    autor: 'Toni Morrison',
    pages: '240 pages',
    genre: 'Classics',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348245688l/139253.jpg',
    title: 'The House on Mango Street',
    autor: 'Sandra Cisneros',
    pages: '110 pages',
    genre: 'Classics',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1534597948l/36360075._SY475_.jpg',
    title: "Things I Don't Want to Know",
    autor: 'Deborah Levy',
    pages: '163 pages',
    genre: 'Memoir',
    summary: '',
},{
    cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306253903l/10950924.jpg',
    title: 'The Dovekeepers',
    autor: 'Alice Hoffman',
    pages: '504 pages',
    genre: 'Historical Fiction',
    summary: '',
}
]



const bookclubDiv = document.querySelector("div");
bookclubDiv.className = "book-club"; //Container to manage the whole body
const bookCase = document.createElement("div");
bookCase.className = "bookcase";
bookclubDiv.appendChild(bookCase);

for (const book of books) {
const newSection = document.createElement("section"); //New div created
newSection.className = "book-card"; //Class for styling

const cardCover = document.createElement("div");
cardCover.className = "card-cover";
newSection.appendChild(cardCover)

const bookCover = document.createElement("img");
bookCover.src = book.cover;
bookCover.className = "book-cover"
cardCover.appendChild(bookCover);

//new div
const cardContent = document.createElement("div");
cardContent.className = "card-content";
newSection.appendChild(cardContent)

const cardTop = document.createElement("section");
cardTop.className = "card-top";
cardContent.appendChild(cardTop);

const bookTitle = document.createElement("h3");
bookTitle.textContent = book.title;
cardTop.appendChild(bookTitle);

const bookAutor = document.createElement("h4");
bookAutor.textContent = book.autor;
cardTop.appendChild(bookAutor);

const cardMiddle = document.createElement("section");
cardMiddle.className = "card-middle";
cardContent.appendChild(cardMiddle);

const bookPages= document.createElement("p");
bookPages.textContent = book.pages;
cardMiddle.appendChild(bookPages);

const bookGenre= document.createElement("p");
bookGenre.textContent = book.genre;
cardMiddle.appendChild(bookGenre);

const cardBottom = document.createElement("section");
cardBottom.className = "card-bottom";
cardContent.appendChild(cardBottom);

const bookSummary = document.createElement("p");
bookSummary.textContent = book.summary;
cardBottom.appendChild(bookSummary);

bookCase.appendChild(newSection);
}