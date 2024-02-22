import {
  partida,
  setPuntuacion,
  cartasImagenes,
  dameUrlCarta,
  dameUrlCartaNuevo,
} from './modelo.js'

import {
  dameNumeroAleatorio,
  dameValorCarta,
  damePuntoDeLaCarta,
  sumarPuntos,
  dameNumeroAleatorioNuevo,
  dameValorCartaNuevo,
  damePuntoDeLaCartaNuevo,
  sumarPuntosNuevo,
} from './motor.js'

//Primera parte
export const inicioPartida = () => {
  document.getElementById("queHabriaPasado").disabled = true;
};

export function muestraPuntuacion() {
  const elementoParrafo = document.getElementById("puntos");
  if (elementoParrafo !== null && elementoParrafo !== undefined) {
    elementoParrafo.innerText = partida.puntuacion;
  };
};

export function mostrarCarta(urlCarta) {
  const elementoImagen = document.getElementById("carta");

  if (elementoImagen !== null && elementoImagen !== undefined) {
    elementoImagen.src = urlCarta;
  };
};

export const mostrarMensaje = (mensaje) => {
  const parrafoResultado = document.getElementById("resultado");

  if (parrafoResultado !== null && parrafoResultado !== undefined) {
    parrafoResultado.innerText = mensaje;
  };
};

export const ganarPartida = () => {
  mostrarMensaje("¡Enhorabuena, has ganado!");
  document.getElementById("queHabriaPasado").disabled = true;
};

export const perderPartida = () => {
  mostrarMensaje("Game over ¡Prueba otra vez!");
  document.getElementById("pideCarta").disabled = true;
  document.getElementById("mePlanto").disabled = true;
};

export function mePlanto() {
  mostrarMensaje("¡Más suerte a la próxima!");
  document.getElementById("pideCarta").disabled = true;
  document.getElementById("mePlanto").disabled = true;
  document.getElementById("queHabriaPasado").disabled = false;
};

export function nuevaPartida() {
  setPuntuacion(0)
  muestraPuntuacion();
  document.getElementById("carta").src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  document.getElementById("pideCarta").disabled = false;
  document.getElementById("mePlanto").disabled = false;
  document.getElementById("queHabriaPasado").disabled = true;
  mostrarMensaje("");
};


//Segunda parte -> extra
export function muestraPuntuacionNuevo() {
  const elementoParrafo = document.getElementById("puntos");
  if (elementoParrafo !== null && elementoParrafo !== undefined) {
    elementoParrafo.innerText = partida.puntuacion;
  };
};

export function mostrarCartaNuevo(urlCarta) {
  const elementoImagen = document.getElementById("carta");

  if (elementoImagen !== null && elementoImagen !== undefined) {
    elementoImagen.src = urlCarta;
  };
};

//Creamos una función que agrupa y llama a todas las funciones que se necesitan para pedir la carta. Esta es la función de pedir carta.
function pideCarta() {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = dameValorCarta(numeroAleatorio);
  const puntoCarta = damePuntoDeLaCarta(carta);
  const puntosSumados = sumarPuntos(puntoCarta);
  setPuntuacion(puntosSumados);
  const urlCarta = dameUrlCarta(carta);
  mostrarCarta(urlCarta);
  muestraPuntuacion();
  gestionarPartida();
};

//Función que agrupa y llama a las funciones nuevas
function pideCartaNuevo() {
  const numeroAleatorioNuevo = dameNumeroAleatorioNuevo();
  const cartaNuevo = dameValorCartaNuevo(numeroAleatorioNuevo);
  const puntoCarta = damePuntoDeLaCartaNuevo(cartaNuevo);
  const puntosSumados = sumarPuntosNuevo(puntoCarta);
  setPuntuacion(puntosSumados);
  const urlCarta = dameUrlCarta(cartaNuevo);
  mostrarCartaNuevo(urlCarta);
  muestraPuntuacionNuevo();
  mostrarMensaje("");
};

export function cargarPartida() {

  const botonPideCarta = document.getElementById("pideCarta");

  if (botonPideCarta !== null && botonPideCarta !== undefined) {
    botonPideCarta.addEventListener("click", pideCarta);
  };

  const botonMePlanto = document.getElementById("mePlanto");

  if (botonMePlanto !== null && botonMePlanto !== undefined) {
    botonMePlanto.addEventListener("click", mePlanto);
  };

  const botonNuevaPartida = document.getElementById("nuevaPartida");

  if (botonNuevaPartida !== null && botonNuevaPartida !== undefined) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  };

  const botonQueHabriaPasado = document.getElementById("queHabriaPasado");

  if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined) {
    botonQueHabriaPasado.addEventListener("click", pideCartaNuevo);
  };
};

export const gestionarPartida = () => {
  if (partida.puntuacion === 7.5) {
    return ganarPartida();
  }
  if (partida.puntuacion > 7.5) {
    return perderPartida();
  };
};