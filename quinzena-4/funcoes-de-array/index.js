let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((element) => {
        divDespesas.innerHTML += `<p>valor: R$${element.valor} | tipo: ${element.tipo} | descrição: ${element.descricao}</p>`
    });
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((element) => {
       switch (element.tipo) {
           case 'alimentação':
               gastoAlimentacao += element.valor;
               break;
            case 'utilidades' :
                gastoUtilidades += element.valor;
                break;
            case 'viagem' :
                gastoViagem += element.valor;
                break;
        }
    });

    //Desafio 03
    gastoTotal = arrDespesas.reduce((valorTotal, element) => {
       return valorTotal + element.valor;
    }, 0);


    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    let despesasFiltradas = [];
    if (valorMin > 0 && valorMax > 0 && valorMin < valorMax && tipoFiltro !== "") {
        despesasFiltradas = arrDespesas.filter((element) => {
            if (element.tipo === tipoFiltro && element.valor >= valorMin && element.valor <= valorMax) {
                return true;
            }
            return false;
        })
        // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    } else {
        alert("Por favor preencha todos os campos corretamente!");
    }

    imprimirDespesas(despesasFiltradas)
}




//Desafio 02
const filtroDecrescente = () => {
    
    arrDespesas.sort((a,b) => {
        return b.valor - a.valor;
    });
    imprimirDespesas(arrDespesas);
}


// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}