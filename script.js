const nUsuario = document.getElementById("usuario");
const btnSaludar = document.getElementById("btn");
const divResult = document.getElementById("resultado");

btnSaludar.addEventListener("click", () => {
  // 1. .value -> pq es de un INPUT: Leemos lo que el usuario escribió
  const nombre = nUsuario.value;
  if (nombre === "") {
    alert("¡Por favor, escribe tu nombre primero!");
    return; // Esto detiene la función y no ejecuta lo de abajo
  }

  // 2. .innerText -> Cambiamos el texto del botón de forma segura
  btnSaludar.innerText = "¡Enviado!";

  // 3. .innerHTML -> Metemos una estructura HTML dentro del div
  // Usamos etiquetas <strong> para que el nombre salga en negrita con BackTrips ``
  // contTexto.innerHTML = "<p>Hola, <strong>" + nombre + "</strong>. ¡Bienvenido!</p>";
  divResult.classList.add("exito");
  divResult.innerHTML = `<p>Hola, <strong>${nombre}</strong>. ¡Bienvenido!</p>`;

  // 4. .textContent -> Un ejemplo rápido para limpiar la consola
  console.log("Procesando texto: " + divResult.textContent);
});

// 1. Seleccionamos el botón del HTML
const boton = document.getElementById("miBoton");

// 2. Creamos una función para generar colores aleatorios
const generarColorHex = () => {
  const caracteres = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 3. Añadimos el "escuchador" de clics
boton.addEventListener("click", () => {
  // Cambiamos el color de fondo de la página
  const nuevoColor = generarColorHex();
  document.body.style.backgroundColor = nuevoColor;

  // Cambiamos el texto del botón para dar feedback
  boton.innerText = "¡Color cambiado!";

  // Un pequeño efecto: que el botón crezca un poco
  boton.style.transform = "scale(1.1)";

  // Consola para depurar (esto lo verás en F12 en el navegador)
  console.log("Nuevo color aplicado: " + nuevoColor);

  // Quitamos el efecto de escala después de 100ms
  setTimeout(() => {
    boton.style.transform = "scale(1)";
  }, 200);
});
