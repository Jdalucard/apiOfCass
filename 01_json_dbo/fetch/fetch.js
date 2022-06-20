console.log('Metodo fetch await');
let url = 'http://localhost:3000/books';

const createBook = () => {
    console.log('Function createBook');
    const newBook = {
        name: "Book 2",
        date: "01-02-2021",
        total_pages: "50"
    }
    const books = async () => {
        const resp = await fetch(
            url, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2NTUzNDI4OTYsImV4cCI6MTY1NTM0NjQ5Niwic3ViIjoiMSJ9.wK1t8OiS8G3tERcFyoqV1y1grAcFaLAyISqQu43bBWA'
            },
            method: 'POST',
            body: JSON.stringify(newBook)
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const readBooks = () => {
    console.log('Function readBooks');
    const books = async () => {
        const resp = await fetch(
            url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9saXZpZXJAbWFpbC5jb20iLCJpYXQiOjE2NTUzNDI4OTYsImV4cCI6MTY1NTM0NjQ5Niwic3ViIjoiMSJ9.wK1t8OiS8G3tERcFyoqV1y1grAcFaLAyISqQu43bBWA'
            },
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const updateBook = () => {
    console.log('updateBook');
    const newBook = {
        name: "Book 10",
        date: "01-02-2021",
        total_pages: "50"
    }
    const books = async () => {
        const resp = await fetch(
            `${url}/10` 
            , {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(newBook)
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}
const deleteBook = () => {
    console.log('deleteBook');
    const books = async () => {
        const resp = await fetch(
            `${url}/11` 
            , {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        });
        const books = await resp.json();
        console.log(books);
    }
    books();
}