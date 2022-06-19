
let url = "http://localhost:3000/customers";
const createCustomers = () => {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastname").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const newCustomer = {
    name: name,
    lastName: lastName,
    age: age,
    email: email
  };
  const students = async () => {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(newCustomer),
    });
    const students = await resp.json();
  };
  students();
};
const readUsers = () => {
  const books = async () => {
    const resp = await fetch(url, {
      method: "GET",
    });
    const books = await resp.json();
    showCustomers(books);
  };
  books();
};

let showCustomers = (usuarios) => {
  usuarios.forEach((element, index) => {
      let texth1 = document.createElement("tr");
      texth1.innerHTML = `
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.lastName}</td>
      <td>${element.age}</td>
      <td>${element.email}</td>`; 
      document.getElementsByTagName("tbody")[0].appendChild(texth1);
  });
}

readUsers();