import saludo_hora from "./saludos.js";

const first = document.querySelector("#nombre");
const second = document.querySelector("#apellido");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = String(first.value);
  const lastName = String(second.value);
  const sexValue = document.querySelector('input[name="sexo"]:checked')?.value || "No especificado";

  div.innerHTML = "<p>" + saludo_hora(name, lastName, sexValue) + "</p>";
});
