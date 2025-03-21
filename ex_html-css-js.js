document.getElementById("oscuro").onclick = function () {
    document.body.classList.toggle("oscuro");
};
document.getElementById("formulario").onsubmit = function (event) {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let telefono = document.getElementById("telefono").value.trim();    
    if (nombre === "" || email === "" ||  direccion=== "" || telefono === "") {
        event.preventDefault();
        alert("Algunos campos son incorrectos o están incompletosa");
    }else if (!email.includes("@")) {
        event.preventDefault();
        alert("Algunos campos son incorrectos o están incompletosb");
    }else if (direccion.length<18) {
        event.preventDefault();
        alert("Algunos campos son incorrectos o están incompletosc");
    }else if (isNaN(telefono)||telefono.length > 9 || telefono.length < 9) {
        event.preventDefault();
        alert("Algunos campos son incorrectos o están incompletosd");
    }else{
        if (confirm("¿Seguro que quieres confirmar y enviar tu pedido ahora?" )) {
            alert("¡Gracias por tu pedido, "+[nombre]+"!");
        }else{  
            event.preventDefault();
        }
    }
};

document.getElementById("observaciones").oninput = function(){
    document.getElementById("contador").textContent = this.value.length;
    if (this.value.length>200) {
        this.value = this.value.slice(0,200);
        document.getElementById("contador").textContent = 200;
    }
};

let botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("mouseover", function(){
    botonEnviar.background = "blue";
});
botonEnviar.addEventListener("mouseout", function(){
    botonEnviar.background = "black";
});