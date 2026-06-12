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

// Função para cronômetros
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
