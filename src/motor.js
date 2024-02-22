import {
  partida,
  setPuntuacion,
  cartasImagenes,
  dameUrlCarta,
  dameUrlCartaNuevo,
} from './modelo.js'

//Primera parte
export const dameNumeroAleatorio = () => {
  return Math.ceil(Math.random() * 10);
};

export const dameValorCarta = (numeroAleatorio) => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else {
    return numeroAleatorio;
  };
};

export const damePuntoDeLaCarta = (carta) => {
  if (carta > 7) {
    return 0.5;
  } else {
    return carta;
  };
};

export const sumarPuntos = (puntosParaSumar) => {
  return partida.puntuacion + puntosParaSumar;
};

//Segunda parte -> extra

export const dameNumeroAleatorioNuevo = () => {
  return Math.ceil(Math.random() * 10);
};

export const dameValorCartaNuevo = (numeroAleatorioNuevo) => {
  if (numeroAleatorioNuevo > 7) {
    return numeroAleatorioNuevo + 2;
  } else {
    return numeroAleatorioNuevo;
  };
};


export const damePuntoDeLaCartaNuevo = (carta) => {
  if (carta > 7) {
    return 0.5;
  } else {
    return carta;
  };
};

export const sumarPuntosNuevo = (puntosParaSumar) => {
  return partida.puntuacion + puntosParaSumar;
};
