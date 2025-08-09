// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];

function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === ""){

        alert("Por favor, inserte un nombre.");

    }
    else{

        listaNombres.push(nombreAmigo);

        limpiarEntrada();
        actualizarLista();

        return nombreAmigo;

    }

}

function limpiarEntrada(){

    document.querySelector('#amigo').value = '';

}

function actualizarLista(){

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of listaNombres){

        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);

    }

}

function sortearAmigo(){

    let tamaño = listaNombres.length;

    if (tamaño === 0){

        alert("No hay amigos para sortear.");

    }

    let indiceAmigo = Math.floor(Math.random() * tamaño); 

    let amigoSorteado = listaNombres[indiceAmigo];

    document.getElementById("resultado").innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;

}