"use strict";
let Madrid = 5;
let Barcelona = 5;
let Messi = true;
function quienGana(equipo1, equipo2, messi) {
    console.log("Comparando equipos:", equipo1, equipo2);
    let resultado;
    if (equipo1 > equipo2) {
        resultado = "madrid";
    }
    else if (equipo1 < equipo2) {
        resultado = "barcelona";
    }
    else {
        resultado = "empate";
    }
    switch (resultado) {
        case "madrid":
            console.log("Gana Madrid");
            break;
        case "barcelona":
            console.log("Gana Barcelona");
            break;
        case "empate":
            console.log("Empatan");
            break;
        default:
            console.log("Sin resultado");
    }
}
quienGana(Madrid, Barcelona, Messi);
