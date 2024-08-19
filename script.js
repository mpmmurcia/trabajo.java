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
  let edad = prompt("Cuál es tu edad?");
  if (edad >= 18) {
    alert("Bienvenido a la página de convertibilidad de monedas.");
    mostrarMonedas();
  } else {
    alert("Lo siento, no puedes utilizar esta página.");
  }
}

function mostrarMonedas() {
  let monedaFrom = prompt("De qué moneda deseas convertir? (Dólares, Pesos, Reales, Euros)");
  let monedaTo = prompt("A qué moneda deseas convertir?");
  let cantidad = parseFloat(prompt("Cuánto deseas convertir?"));
  convertirMoneda(monedaFrom, monedaTo, cantidad);
}

function obtenerTasa(from, to) {
    let conv = conversiones.find((conv) => conv.from === from && (link unavailable) === to);
    return conv.rate;
  }

function convertirMoneda(from, to, cantidad) {
    let tasa = obtenerTasa(from, to);
    let resultado = cantidad * tasa;
    alert(`El resultado de la conversión es: ${resultado} ${to}`);
  }
  
 
 
  
  verificarEdad();