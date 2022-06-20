console.log('Metodo fetch await11');

let url = "http://localhost:3000/students";
const createAlumno = () => {
  console.log("Function createBook");
  const nombre = document.getElementById("name").value;
  const apellido = document.getElementById("lastname").value;
  const correo = document.getElementById("email").value;
  const pasword = document.getElementById("ps").value;
  const newAlumno = {
    name: nombre,
    lastname: apellido,
    email: correo,
    ps: pasword,
  };
  const students = async () => {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newAlumno),
    });
    const students = await resp.json();
    console.log(students);
  };
  students();
};
const readBooks = () => {
  console.log("Function readBooks");
  const books = async () => {
    const resp = await fetch(url, {
      method: "GET",
    });
    const books = await resp.json();
    console.log(books);
  };
  books();
};
const updateBook = () => {
  console.log("updateBook");
  const newBook = {
    name: "Book 2",
    date: "01-02-2021",
    total_pages: "50",
  };
  const books = async () => {
    const resp = await fetch(`${url}/4`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(newBook),
    });
    const books = await resp.json();
    console.log(books);
  };
  books();
};
const deleteBook = () => {
  console.log("deleteBook");
  const books = async () => {
    const resp = await fetch(`${url}/10`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });
    const books = await resp.json();
    console.log(books);
  };
  books();
};