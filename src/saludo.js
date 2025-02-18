import saludo_nom from "./saludo_nom";

const first = document.querySelector("#nombre");
const second = document.querySelector("#apellido");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = String(first.value);
  const lastName = String(second.value);

  div.innerHTML = "<p>" + saludo_nom(name, lastName) + "</p>";
});
