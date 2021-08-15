
let pessoas = ["Dirceli", "Tatiana", "Frederico", "Vanessa", "Fátima", "Aparecida", "Alexandre", "Cristiano", "Letícia", "Cecília", "Luciana", "Rodolfo"];

function sortearN() {

    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("displayNome").innerHTML = pessoas[ns];

}

let premios = ["Televisão", "Geladeira", "Notebook", "Microondas", "Smatphone", "Máquina de lavar roupas"];

function sortearP() {

    let np = premios.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("displayNumber").innerHTML = premios[ns];

}