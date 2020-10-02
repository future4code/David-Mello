const botaoClicado = () => {
    const tarefaDiv = document.getElementById("tarefa");
    const tarefa = tarefaDiv.value;
    const diasSemana = document.getElementById("dias-semana");
    const diaEscolhido = diasSemana.value;
    const horasDia = document.getElementById("horas-dia");
    const horaEscolhida = horasDia.value;
    const diaEHora = document.getElementsByClassName(`${diaEscolhido} ${horaEscolhida}`);


    if (tarefa === "") {
        alert("Por favor, digite uma tarefa.");
    } else {
        diaEHora[0].innerHTML += `<li onclick="riscarTarefa(this)"> ${tarefa}</li>`;
        tarefaDiv.value = "";

    }

}

const riscarTarefa = (item) => {
    item.style.textDecoration = "line-through";
    item.style.color = "red";
}


const limparPlanner = () => {
    const horas = document.getElementsByClassName("horaDiv");
    for (let hora of horas) {
        hora.innerHTML = "";
    }
}

const modoNoite = () => {
    const body = document.getElementsByTagName("body");
    body[0].style.color = "whitesmoke";
    body[0].style.backgroundColor = "black";

    const botaoNoite = document.getElementById("botaoNoite");
    botaoNoite.style.display = "none";
    const botaoDia = document.getElementById("botaoDia");
    botaoDia.style.display = "inline";
    //tira o botão noite e coloca o botão dia.

    const button = document.getElementsByTagName("button");
    for (let index of button) {
        index.style.border = "1px solid white";
    } //deixa os botões mais visíveis no modoNoite.
}

const modoDia = () => {
    const body = document.getElementsByTagName("body");
    body[0].style.color = "black";
    body[0].style.backgroundColor = "white";

    const botaoNoite = document.getElementById("botaoNoite");
    botaoNoite.style.display = "inline";
    const botaoDia = document.getElementById("botaoDia");
    botaoDia.style.display = "none";
    //tira o botão dia e coloca o botão noite.

    const button = document.getElementsByTagName("button");
    for (let index of button) {
        index.style.border = "1px solid black";
    } //deixa os botões mais visíveis no modoDia.
}

const botaoDia = document.getElementById("botaoDia");
botaoDia.style.display = "none"; //faz botão dia não aparecer ao carregar a página na primeira vez