const menuHamburguesa = document.querySelector(".menuhamburguesa")
const topBar = document.getElementsByTagName("header")
const menuHamburguesaSeleccionado = document.getElementsByClassName("secciones-menu-seleccionado")
const botonesDeProyectos = document.querySelectorAll(".clases-de-proyectos button")
const botonTodos = document.querySelector("#todos")
const botonHtml = document.querySelector("#html")
const botonjavascript = document.querySelector("#javascript")
const botonreact = document.querySelector("#react")
const tarjetasDeProyectos = document.querySelectorAll(".segunda")



    for (let botonProyecto of botonesDeProyectos) {
        botonProyecto.onclick = () => {
            for (let tarjetaProyectos of tarjetasDeProyectos) {
            
                if ((tarjetaProyectos.dataset.nombre)==(botonProyecto.dataset.nombre)) {
                    tarjetaProyectos.classList.remove("hidden")
                    tarjetaProyectos.classList.add("segunda")
                    console.log("Estoy aquí")
                }
                else if ((botonProyecto.dataset.nombre)===("todos")) {
                tarjetaProyectos.classList.add("segunda")
                tarjetaProyectos.classList.remove("hidden")
                console.log("Hola")
                }
                else {
                    tarjetaProyectos.classList.add("hidden")
                }
            }
    }
}
