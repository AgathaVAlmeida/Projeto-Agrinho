const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Alternar abas
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

// Data estimada da próxima colheita
const proximaColheita = new Date("2027-01-15T00:00:00");

function atualizarCronometro() {

    const agora = new Date();
    const diferenca = proximaColheita - agora;

    if (diferenca <= 0) {
        document.getElementById("dias0").textContent = 0;
        document.getElementById("horas0").textContent = 0;
        document.getElementById("min0").textContent = 0;
        document.getElementById("seg0").textContent = 0;
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("dias0").textContent = dias;
    document.getElementById("horas0").textContent = horas;
    document.getElementById("min0").textContent = minutos;
    document.getElementById("seg0").textContent = segundos;
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);
