
const opciones = ["piedra", "papel", "tijeras"];
function eleccionPrograma(){
    const opcionPrograma = opciones[Math.floor(Math.random() * 3)];
    return opcionPrograma;
}

function jugar(opcionUsuario) {
    const opcionPrograma = eleccionPrograma();
    const resultado = determinarGanador(opcionUsuario, opcionPrograma);
    const mensaje = `<br><br>Elegiste ${opcionUsuario}.<br><br> El programa eligió ${opcionPrograma}.<br><br>Resultado: ${resultado}`;
    document.getElementById("resultado").innerHTML = mensaje;
}

function determinarGanador(opcionUsuario, opcionPrograma) {
    if (opcionUsuario === opcionPrograma) {
        return "Empate";
    } else if (
        (opcionUsuario === "piedra" && opcionPrograma === "tijeras") ||
        (opcionUsuario === "papel" && opcionPrograma === "piedra") ||
        (opcionUsuario === "tijeras" && opcionPrograma === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}
