const button = document.querySelector("#submit");
const formulario = document.querySelector(".imput");
const content = document.querySelector("#content");

 function submitform(event) {
     event.preventDefault();
    content.innerHTML = formulario.value;
 }

 button.addEventListener('click', submitform);