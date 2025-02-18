import saludo_sr from "./saludos.js";

const first = document.querySelector("#nombre");
const second = document.querySelector("#apellido");
const age = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = String(first.value);
  const lastName = String(second.value);
  const sexValue = document.querySelector('input[name="sexo"]:checked')?.value || "No especificado";
  const ageValue = Number(age.value);

  div.innerHTML = "<p>" + saludo_sr(name, lastName, sexValue, ageValue) + "</p>";
});
