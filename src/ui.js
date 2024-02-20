import {
    puntuacion,
    cartasImagenes,
    dameUrlCarta,
    dameUrlCartaNuevo,
  } from './modelo.js'

//Primera parte
export const inicioPartida = () => {
    document.getElementById("queHabriaPasado").disabled = true;
  };

export function muestraPuntuacion() {
    const elementoParrafo = document.getElementById("puntos");
    console.log(puntuacion);
    if (elementoParrafo !== null && elementoParrafo !== undefined) {
      elementoParrafo.innerText = puntuacion;
    };
  };

export function mostrarCarta (urlCarta) {
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
    puntuacion = 0;
    muestraPuntuacion();
    document.getElementById("carta").src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    document.getElementById("pideCarta").disabled = false;
    document.getElementById("mePlanto").disabled = false;
    document.getElementById("queHabriaPasado").disabled = true;
    mostrarMensaje("");
};
  
export const botonPideCarta = document.getElementById("pideCarta");
  
    if (botonPideCarta !== null && botonPideCarta !== undefined) {
       botonPideCarta.addEventListener("click", pideCarta);
};
  
export const botonMePlanto = document.getElementById("mePlanto");
  
    if (botonMePlanto !== null && botonMePlanto !== undefined) {
      botonMePlanto.addEventListener("click", mePlanto);
};
  
export const botonNuevaPartida = document.getElementById("nuevaPartida");
  
    if (botonNuevaPartida !== null && botonNuevaPartida !== undefined) {
      botonNuevaPartida.addEventListener("click", nuevaPartida);
};

//Segunda parte -> extra
export function muestraPuntuacionNuevo() {
    const elementoParrafo = document.getElementById("puntos");
    console.log(puntuacion);
    if (elementoParrafo !== null && elementoParrafo !== undefined) {
      elementoParrafo.innerText = puntuacion;
    };
  };
  
export function mostrarCartaNuevo (urlCarta) {
    const elementoImagen = document.getElementById("carta");
  
    if (elementoImagen !== null && elementoImagen !== undefined) {
      elementoImagen.src = urlCarta;
    };
};

export const botonQueHabriaPasado = document.getElementById("queHabriaPasado");

  if (botonQueHabriaPasado !== null && botonQueHabriaPasado !== undefined) {
    botonQueHabriaPasado.addEventListener("click", pideCartaNuevo);
};
