"use strict";

import {
  puntuacion,
  cartasImagenes,
  dameUrlCarta,
  dameUrlCartaNuevo,
} from './modelo.js'

import {
  dameNumeroAleatorio,
  dameValorCarta,
  damePuntoDeLaCarta,
  sumarPuntos,
  gestionarPartida,
  dameNumeroAleatorioNuevo,
  dameValorCartaNuevo,
  damePuntoDeLaCartaNuevo,
  sumarPuntosNuevo,
} from './motor.js'

import {
  inicioPartida,
  muestraPuntuacion,
  mostrarCarta,
  mostrarMensaje,
  ganarPartida,
  perderPartida,
  mePlanto,
  nuevaPartida,
  botonPideCarta,
  botonMePlanto,
  botonNuevaPartida,
  muestraPuntuacionNuevo,
  mostrarCartaNuevo,
  botonQueHabriaPasado,
} from './ui.js'

//Usamos un const para gestionar la puntuación.
const setPuntuacion = (nuevoPunto) => {
  puntuacion = nuevoPunto;
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