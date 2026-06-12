const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
botoes[i].onclick = function () {

    for (let j = 0; j < botoes.length; j++) {
        botoes[j].classList.remove("ativo");
        textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
};

}

function atualizarContador(dataFinal, ids) {

const agora = new Date();
const diferenca = dataFinal - agora;

if (diferenca <= 0) {
    document.getElementById(ids.dias).textContent = 0;
    document.getElementById(ids.horas).textContent = 0;
    document.getElementById(ids.min).textContent = 0;
    document.getElementById(ids.seg).textContent = 0;
    return;
}

const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
const segundos = Math.floor((diferenca / 1000) % 60);

document.getElementById(ids.dias).textContent = dias;
document.getElementById(ids.horas).textContent = horas;
document.getElementById(ids.min).textContent = minutos;
document.getElementById(ids.seg).textContent = segundos;

}

function atualizarTodos() {

atualizarContador(
    new Date("2026-09-01T00:00:00"),
    {
        dias: "diasSoja",
        horas: "horasSoja",
        min: "minSoja",
        seg: "segSoja"
    }
);
    function atualizarTodos() {

// Próximo plantio da soja
atualizarContador(
    new Date("2026-09-01T00:00:00"),
    {
        dias: "diasSoja",
        horas: "horasSoja",
        min: "minSoja",
        seg: "segSoja"
    }
);

// Meta tecnológica
atualizarContador(
    new Date("2030-01-01T00:00:00"),
    {
        dias: "diasTec",
        horas: "horasTec",
        min: "minTec",
        seg: "segTec"
    }
);

// Dia Mundial do Meio Ambiente
atualizarContador(
    new Date("2027-06-05T00:00:00"),
    {
        dias: "diasAmb",
        horas: "horasAmb",
        min: "minAmb",
        seg: "segAmb"
    }
);

// Agenda 2030
atualizarContador(
    new Date("2030-12-31T23:59:59"),
    {
        dias: "dias2030",
        horas: "horas2030",
        min: "min2030",
        seg: "seg2030"
    }
);

    }

}

atualizarTodos();
setInterval(atualizarTodos, 1000);
