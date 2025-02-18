import greetings from "./saludos.js";

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
  const idiomaValue = document.documentElement.getAttribute("xml:lang");

  div.innerHTML = "<p>" + greetings(name, lastName, sexValue, ageValue, idiomaValue) + "</p>";
});
