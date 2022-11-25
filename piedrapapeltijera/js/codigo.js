
// Funciones 
// Función de resultado PC aleatorio y sin decimales
            function aleatorio(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
//Función del juego
            function eleccion(jugada){
                let resultado = ""
                if(jugada == 1) {
                    resultado = "Piedra 🪨"
                } else if(jugada == 2){
                    resultado = "Papel 🗞️"
                } else if(jugada == 3){
                    resultado = "Tijera ✂️"
                } else {
                    resultado = errores
                    resultado = "Opción no válida, elige 1, 2 o 3"
                }
                return resultado
            }

//Variables
            let pc = 0
            let jugador = 0
            let triunfos = 0
            let perdidas = 0
            let empate = 0
            let partidas = 0
            let errores = 0

            //Ciclo el mejor de 3 partidas
            while (partidas < 3) {

                pc = aleatorio(1,3)
                jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera")
        
                // alert("Elegiste " + jugador )
                alert("Elegiste " + eleccion(jugador))
                alert("PC elige: " + eleccion(pc))
       
            // COMBATE
                if(pc == jugador) {
                    alert("EMPATE")
                    empate = empate + 1
                    partidas = partidas + 1
                } else if(jugador == 1 && pc == 3){
                    alert("GANASTE")
                    triunfos = triunfos + 1
                    partidas = partidas + 1
                } else if(jugador == 2 && pc == 1){
                    alert("GANASTE")
                    triunfos = triunfos + 1
                    partidas = partidas + 1
                } else if(jugador == 3 && pc == 2){
                    alert("GANASTE")
                    triunfos = triunfos + 1
                    partidas = partidas + 1
                } else if(jugador == 3 && pc == 1){
                    alert("PERDISTE")
                    perdidas = perdidas + 1
                    partidas = partidas + 1
                } else if(jugador == 1 && pc == 2){
                    alert("PERDISTE")
                    perdidas = perdidas + 1
                    partidas = partidas + 1
                } else if(jugador == 2 && pc == 1){
                    alert("PERDISTE")
                    perdidas = perdidas + 1
                    partidas = partidas + 1
                } else {
                    alert("ERRORES")
                    partidas = partidas + 1
                    errores = errores + 1
                }
            }
        
            alert("Victorias: " + triunfos + " Derrotas: " + perdidas + " Empates: " + empate + " Errores: " + errores)
       
 