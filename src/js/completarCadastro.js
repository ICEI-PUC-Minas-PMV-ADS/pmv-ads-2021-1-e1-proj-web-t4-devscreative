const inputNome = document.getElementById("nome");
const inputSobreNome = document.getElementById("sobrenome");
const inputEmail = document.getElementById("email");
const inputEndereco = document.getElementById("endereco");
const inputNumero = document.getElementById("numero");
const inputComplemento = document.getElementById("complemento");
const inputCep = document.getElementById("cep");
// const inputEstado = document.getElementById("");
// const inputCidade = document.getElementById("");
const btnEnviar = document.getElementById("btn-enviar");

const guardarDados = (() => {
    let users = JSON.parse(localStorage.getItem("user") || "[]");

    const dados = {
        "nome": inputNome.value,
        "sobrenome": inputSobreNome.value,
        "email": inputEmail.value,
        "endereco": inputEndereco.value,
        "numero": inputNumero.value,
        "complemento": inputComplemento.value,
        "cep": inputCep.value
    }
    users.push(dados);

    localStorage.setItem("user", JSON.stringify(users));
    // location.reload();
});

btnEnviar.addEventListener("click", guardarDados);


const btnCadastrar = document.getElementById("btn-cadastrar");

const redirecionar = () => {
    window.location.href = "./completar-cadastro.html";
}

btnCadastrar.addEventListener("click", redirecionar);