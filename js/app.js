
function comprar(){
    let ingressosComprado = document.getElementById("tipo-ingresso");
    let qtdIngressos = parseInt(document.getElementById("qtd").value);

    if (ingressosComprado.value == "pista"){
        comprarDeIngressoPista(qtdIngressos);
    } else if (ingressosComprado.value == "superior"){
        comprarDeIngressoSuperior(qtdIngressos)
    } else {
        comprarDeIngressoInferior(qtdIngressos)
    }

    document.getElementById("qtd").value = "";
}

function comprarDeIngressoPista(qtdIngressos){
    let qtdIngressosPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtdIngressos > qtdIngressosPista) {
        alert("Quantidade de ingressos indisponivel para compra do tipo pista");
    } else {
        qtdIngressosPista = qtdIngressosPista - qtdIngressos;
        document.getElementById("qtd-pista").textContent = qtdIngressosPista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarDeIngressoSuperior(qtdIngressos){
    let qtdIngressosSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtdIngressos > qtdIngressosSuperior) {
        alert("Quantidade de ingressos indisponivel para compra do tipo superior");
    } else {
        qtdIngressosSuperior = qtdIngressosSuperior - qtdIngressos;
        document.getElementById("qtd-superior").textContent = qtdIngressosSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarDeIngressoInferior(qtdIngressos){
    let qtdIngressosInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtdIngressos > qtdIngressosInferior) {
        alert("Quantidade de ingressos indisponivel para compra do tipo inferior");
    } else {
        qtdIngressosInferior = qtdIngressosInferior - qtdIngressos;
        document.getElementById("qtd-inferior").textContent = qtdIngressosInferior;
        alert("Compra realizada com sucesso!");
    }
}