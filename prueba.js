if (contadorPuntosJug1 > contadorPuntosJug2) {
    resultado.ganador = jugadorUno.nombre
  } else if (contadorPuntosJug1 < contadorPuntosJug2) {
    resultado.ganador = jugadorDos.nombre
  } else {
    resultado.ganador = "Empate"
  }
  console.log(resultado);