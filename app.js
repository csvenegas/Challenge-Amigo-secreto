
let amigos = [];
const input = document.getElementById("amigo");

function agregarAmigo() {
    if (input.value.trim() !== "") {
        document.getElementById("resultado").innerHTML = "";
        const nombre = input.value;
        amigos.push(nombre);

        actualizarAmigos();

        input.value = "";
    } else {
        alert("Por favor, ingrese un nombre valido")
    }
}

function actualizarAmigos() {
    amigos.forEach(amigo => {
        nombre = amigo;
    });
    const elementList = document.createElement("li");
    elementList.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(elementList);
}

function sortearAmigo() {
    if (amigos.length !== 0) {
        document.getElementById("listaAmigos").innerHTML = "";
        const indice = Math.floor(Math.random() * amigos.length);

        const amigoElegido = amigos[indice];
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoElegido}`;
        amigos = [];
    } else {
        alert("No ha ingresado ningun nombre");
    }
}