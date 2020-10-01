const botaoClicado = () => {
    const tarefaDiv = document.getElementById("tarefa");
    const tarefa = tarefaDiv.value;
    const diasSemana = document.getElementById("dias-semana");
    const  diaEscolhido = diasSemana.value;
    const diaDiv = document.getElementById(diaEscolhido);
    diaDiv.innerHTML += `<li> ${tarefa}</li>`;
    tarefaDiv.value = "";
}
