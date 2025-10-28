let Madrid = 5;
let Barcelona = 5;
let Messi: boolean = true;

function quienGana(equipo1: number, equipo2: number, messi: boolean) {
    console.log("Comparando equipos:", equipo1, equipo2);

 
    let resultado: string;

    if (equipo1 > equipo2) {
        resultado = "madrid";
    } else if (equipo1 < equipo2) {
        resultado = "barcelona";
    } else {
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
