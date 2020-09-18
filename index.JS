const menuHamburguesa = document.querySelector(".menuhamburguesa")
const topBar = document.getElementsByTagName("header")
const menuHamburguesaSeleccionado = document.getElementsByClassName("secciones-menu-seleccionado")
console.log (menuHamburguesaSeleccionado)
console.log(topBar)
console.log(menuHamburguesa)

menuHamburguesa.classList.add ("menuHamburguesaSeleccionado")


//menuHamburguesa.onclick = () => {
    //console.log ("El")
    //for (let topBarelements of topBar) {
        //topBarelements.classList.remove ("topbar")
        //topBarelements.classList.add(".menuhamburguesa-seleccionado")
    //}
//}
