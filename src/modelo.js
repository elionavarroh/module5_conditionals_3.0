export const partida = {
    puntuacion: 0
};

export const setPuntuacion = (nuevoPunto) => {
    partida.puntuacion = nuevoPunto;
};

export const cartasImagenes = {
    1: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg',
    2: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg',
    3: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg',
    4: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg',
    5: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg',
    6: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg',
    7: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg',
    10: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg',
    11: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg',
    12: 'https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg',
};

export const dameUrlCarta = (carta) => {
    return cartasImagenes[carta];
};

export const dameUrlCartaNuevo = (cartaNuevo) => {
    return cartasImagenes[cartaNuevo];
};