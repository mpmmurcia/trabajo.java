let monedas = ["Dólares", "Pesos", "Reales", "Euros"];
let conversiones = [
  { from: "Dólares", to: "Pesos", rate: 200 },
  { from: "Dólares", to: "Reales", rate: 5 },
  { from: "Dólares", to: "Euros", rate: 0.8 },
  { from: "Pesos", to: "Dólares", rate: 0.005 },
  { from: "Pesos", to: "Reales", rate: 0.025 },
  { from: "Pesos", to: "Euros", rate: 0.0025 },
  { from: "Reales", to: "Dólares", rate: 0.2 },
  { from: "Reales", to: "Pesos", rate: 40 },
  { from: "Reales", to: "Euros", rate: 0.16 },
  { from: "Euros", to: "Dólares", rate: 1.25 },
  { from: "Euros", to: "Pesos", rate: 400 },
  { from: "Euros", to: "Reales", rate: 6.25 },
];

function verificarEdad() {
  let edad = parseInt(prompt("¿Cuál es tu edad?"), 10);
  if (isNaN(edad)) {
    alert("Por favor, ingresa una edad válida.");
    return;
  }
  if (edad >= 18) {
    alert("Bienvenido a la página de convertibilidad de monedas.");
    realizarConversiones();
  } else {
    alert("Lo siento, no puedes utilizar esta página.");
  }
}

function realizarConversiones() {
  let continuar = true;

  while (continuar) {
    mostrarMonedas();

    // Preguntar al usuario si quiere continuar
    let respuesta = prompt("¿Quieres realizar otra conversión? (sí/no)").toLowerCase().trim();
    if (respuesta !== 'sí' && respuesta !== 'si') {
      alert("¡Gracias por usar la calculadora de conversiones! ¡Hasta luego!");
      continuar = false; // Salir del bucle
    }
  }
}

function mostrarMonedas() {
  let monedaFrom = prompt("¿De qué moneda deseas convertir? (Dólares, Pesos, Reales, Euros)").trim();
  let monedaTo = prompt("¿A qué moneda deseas convertir?").trim();
  let cantidad = parseFloat(prompt("¿Cuánto deseas convertir?")); // Asegúrate de que la cantidad sea un número
  if (isNaN(cantidad)) { // Verifica si la cantidad es un número válido
    alert("Por favor, ingresa una cantidad válida.");
    return;
  }
  convertirMoneda(monedaFrom, monedaTo, cantidad);
}

function obtenerTasa(from, to) {
  // Normaliza las monedas a mayúsculas para evitar problemas de coincidencia
  from = from.charAt(0).toUpperCase() + from.slice(1).toLowerCase();
  to = to.charAt(0).toUpperCase() + to.slice(1).toLowerCase();

  // Comprobar que las monedas están en el array de monedas válidas
  if (!monedas.includes(from) || !monedas.includes(to)) {
    alert("Moneda no válida. Asegúrate de que las monedas estén escritas correctamente.");
    return null;
  }

  for (let i = 0; i < conversiones.length; i++) {
    if (conversiones[i].from === from && conversiones[i].to === to) {
      return conversiones[i].rate;
    }
  }
  return null; // Retorna null si no se encuentra la tasa
}

function convertirMoneda(from, to, cantidad) {
  let tasa = obtenerTasa(from, to);
  if (tasa === null) {
    alert("No se puede realizar la conversión: tasa no encontrada.");
    return;
  }
  let resultado = cantidad * tasa;
  alert(`El resultado de la conversión es: ${resultado.toFixed(2)} ${to}`);
}

verificarEdad();

