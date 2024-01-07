
const elementoRespostas = document.querySelector("#resposta")
const elementoPerguntas = document.querySelector("#inputPergunta")


const respostas = [
    "Certeza",
    "Não tenho tanto certeza.",
    "É decididamente assim.",
    "Não conte com isso",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente",
    "Minha resposta é não",
    "Melhor não te dizer agora.",
    "A meu ver sim.",
    "Minhas fontes dizem que não.",
    "Não é possível prever agora.",
    "Expectativas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunta novamente",
    "Sinais apontam que sim.",
    "Talvez não.",

]

function fazerPergunta(event) {
    event.preventDefault();

    if (inputPergunta.value == "") {

        alert("Campo vázio, digite sua pergunta na caixa de texto!!!")
        return

    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoRespostas.innerHTML = pergunta + respostas[numeroAleatorio]


}