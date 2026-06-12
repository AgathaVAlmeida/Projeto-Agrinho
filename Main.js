const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Troca de abas
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

// Metas do painel
const metas = [
    { atual: 21.1, meta: 22.0 },
    { atual: 75, meta: 100 },
    { atual: 85, meta: 100 },
    { atual: 2, meta: 17 }
];

// Contadores
const contadores = document.querySelectorAll(".contador");

// Área e tempo (fora da função pra não duplicar interval)
let area = 0;
let horas = 0;

setInterval(() => {
   area += 0.02;
   document.getElementById("area-monitorada").textContent =
      area.toFixed(2);
}, 2000);

setInterval(() => {
   horas += 0.5;
   document.getElementById("tempo-estiagem").textContent =
      horas.toFixed(1);
}, 2000);

// Atualiza contadores das metas
function atualizarContadores() {

    for (let i = 0; i < metas.length; i++) {

        const numeros =
            contadores[i].querySelectorAll(".contador-digito-numero");

        if (metas[i].atual < metas[i].meta) {
            metas[i].atual += 0.01;
        }

        numeros[0].textContent = metas[i].atual.toFixed(2);
        numeros[1].textContent = metas[i].meta.toFixed(2);
        numeros[2].textContent = (metas[i].meta - metas[i].atual).toFixed(2);
    }
}

// inicializa
atualizarContadores();
setInterval(atualizarContadores, 100);
