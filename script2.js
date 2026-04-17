const inpNombre = document.getElementById("usuario");
const btSaludar = document.getElementById("btn");
const result = document.getElementById("resultado");

btSaludar.addEventListener("click", () => {
  if (inpNombre.value === "") {
    //ojo, no poner == null porque eso sería un objeto que no existe
    alert("¡Por favor, escribe tu nombre primero!");
    return; // Esto detiene la función y no ejecuta lo de abajo
  }

  result.innerHTML = "<p>" + "hola " + inpNombre.value + "</p>";
  //divResult.innerHTML = `<p>Hola, <strong>${nombre}</strong>. ¡Bienvenido!</p>`;
  result.innerHTML = `<p> hola <strong>${inpNombre.value}</strong>`;
  result.classList.add("exito");

  btSaludar.innerText = "Enviado!";

  console.log(
    "Precesado saludo a ",
    inpNombre.value,
    "con el texto: ",
    result.textContent,
  );
});

const crearColor = () => {
  const caracteres = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 16);
    color += caracteres[n];
  }
  console.log("color: ", color);
  return color;
};

a = crearColor();
