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
    email: email,
  };

  if (name === ''){
    alert('El campo nombre esta vacío');
    return false;
  }
  if (lastName === ''){
    alert('El campo apellido esta vacío');
    return false;
  }
  if (age === ''){
    alert('El campo edad esta vacío');
    return false;
  }

  if (email === ''){
    alert('El campo correo esta vacío');
    return false;
  }

  if (name.length < 3){
    alert('El campo nombre debe tener mínimo 3 caracteres');
    return false;
  }

  if (lastName.length < 3){
    alert('El campo nombre debe tener mínimo 3 caracteres');
    return false;
  }
  if (email.length < 3){
    alert('El campo nombre debe tener mínimo 3 caracteres');
    return false;
  }

  if (!validateEmail(email)){
    alert('El campo email no cumple con el formato');
    return false;
  }

  customers(newCustomer);
};


const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
}
    
const customers = async (data) => {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const customers = await resp.json();
  console.log(customers);
};

const readCustomers = () => {
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
};

readCustomers();
