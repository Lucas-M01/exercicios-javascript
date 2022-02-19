/* Fetching and counting data in an array.

    Based on the Array of books by category below, do the following challenges.

    * Count the number of categories and the number of books in each category.
    * Count the number of authors.
    * Show books by author Augusto Cury.
    * Transform the above function into a function that will receive the author's name and return the author's books.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories)
for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books} `)
}
booksOfAuthor('George S. Clason')