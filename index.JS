const menuHamburguesa = document.querySelector(".menuhamburguesa")
const topBar = document.getElementsByTagName("header")
const menuHamburguesaSeleccionado = document.getElementsByClassName("secciones-menu-seleccionado")
const botonTodos = document.querySelector("#todos")
const botonHtml = document.querySelector("#html")
const botonjavascript = document.querySelector("#javascript")
const botonreact = document.querySelector("#react")
const tarjetasDeProyectos = document.querySelectorAll(".secundaria")
const botonesDeProyectos = document.querySelectorAll(".clases-de-proyectos button")


    for (let botonProyecto of botonesDeProyectos) {
        botonProyecto.onclick = () => {
            for (let tarjetaProyectos of tarjetasDeProyectos) {
                if (tarjetaProyectos.dataset.nombre)
        }
    }
}
