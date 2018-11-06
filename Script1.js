// JavaScript source code
let boton = document.getElementById("btn");//Lo guardas en variable para que no busque más de una vez
if (boton !== null) {
    boton.addEventListener("click", getName);
}
let nombreGuardado = sessionStorage.getItem("name");
if (nombreGuardado !== null) {
    document.getElementById("mostrar").innerHTML = nombreGuardado;//Escribir en el segundo HTML
}
function getName() {
    let nombre = document.getElementById("name").value;
    document.getElementById("mostrar").innerHTML = nombre;
    sessionStorage.setItem("name", nombre);
}
//document.getElementById("btn").addEventListener("click", getName);////El if de boton!==null sustituye a esto
//EL NOMBRE SE QUEDARA GUARDADO AUNQUE ACTUALICES, PARA EMPEZAR DE CERO CERRAR PESTAÑA Y VOLVER A ABRIR