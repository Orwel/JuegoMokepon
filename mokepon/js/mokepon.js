const sectionReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionResultadoParcial = document.getElementById("resultado-parcial")

const tarjetaAtaqueJugador = document.getElementById("tarjetaAtaqueJugador")
const tarjetaAtaqueEnemigo = document.getElementById("tarjetaAtaqueEnemigo")

const sectionResultadoFinal = document.getElementById("resultado-final")

const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones

let inputCapipepo
let inputHipodoge
let inputRatigueya

let botonAgua
let botonFuego
let botonTierra
let botones = []
let mascotaEnemigo
let mascotaJugador
let ataquesMokepon
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vidas) {
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", "assets/mokepons_mokepon_hipodoge_attack.png", 5)

let capipepo = new Mokepon("Capipepo", "assets/mokepons_mokepon_capipepo_attack.png", 5)

let ratigueya = new Mokepon("Ratigueya", "assets/mokepons_mokepon_ratigueya_attack.png", 5)

hipodoge.ataques.push(
    {nombre: "💦", id: "boton-agua"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🩸", id: "boton-agua"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🌱", id: "boton-tierra"},
)

capipepo.ataques.push(
    {nombre: "🌱", id: "boton-tierra"},
    {nombre: "🪴", id: "boton-tierra"},
    {nombre: "🌵", id: "boton-tierra"},
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
)

ratigueya.ataques.push(
    {nombre: "🔥", id: "boton-fuego"},
    {nombre: "🧨", id: "boton-fuego"},
    {nombre: "🎆", id: "boton-fuego"},
    {nombre: "💧", id: "boton-agua"},
    {nombre: "🌱", id: "boton-tierra"},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}"
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
    })


    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)



}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        alert("Seleccionaste a Hipodoge")
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        alert("Seleccionaste a Capipepo")
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        alert("Seleccionaste a Ratigueya")
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Selecciona una mascota")

    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques() {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
    botonReiniciar = document.getElementById("boton-reiniciar")

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botones = document.querySelectorAll(".BAtaque")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    console.log(botones)

}

function secuenciaAtaque() {
    botones.forEach((boton) => { 
        boton.addEventListener("click", (e)  => {
            console.log(e)
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    secuenciaAtaque() 

}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
    crearMensaje2()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
    crearMensaje2()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
    crearMensaje2()
}
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
 
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else
        ataqueEnemigo = "TIERRA"

combate()

}
function combate() {

    if(ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
     vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()

}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES GANASTE")

    } else if (vidasJugador == 0) {
        crearMensajeFinal("GAME OVER")
    } 
}
function crearMensaje(resultadoCombate) {

    sectionResultadoParcial.innerHTML =  resultadoCombate
}

function crearMensaje2()  {

    let parrafo = document.createElement("p")
    parrafo.innerHTML = ataqueJugador 

    tarjetaAtaqueJugador.appendChild(parrafo)


    let parrafo2 = document.createElement("p")
    parrafo2.innerHTML = ataqueEnemigo 

    tarjetaAtaqueEnemigo.appendChild(parrafo2)

}

function crearMensajeFinal(resultadoFinal) {

    sectionResultadoParcial.style.display = "none"
    sectionReiniciar.style.display = "block"

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
    sectionResultadoFinal.appendChild(parrafo)

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
