const atualizarCadastro = (evento) => {

    evento.preventDefault();

    const cadastro = JSON.parse(localStorage.getItem("cadastroCompleto")) || [];

    const nomeInput = document.getElementById("username");
    const nome = nomeInput.value;

    const emailInput = document.getElementById("useremail");
    const email = emailInput.value;

    const enderecoInput = document.getElementById("userendereco");
    const endereco = enderecoInput.value;

    const numeroInput = document.getElementById("usernumeroendereco");
    const numero = numeroInput.value;

    const complementoInput = document.getElementById("usercomplemento");
    const complemento = complementoInput.value;

    const cepInput = document.getElementById("usercep");
    const cep = document.cepInput.value;

    const estadoInput = document.getElementById("userestado");
    const estado = estadoInput.value;

    const cidadeInput = document.getElementById("usercidade");
    const cidade = cidadeInput.value;

    dados = {
        nome,
        email,
        endereco,
        numero,
        complemento,
        cep,
        estado,
        cidade
    };

    const cadastroAtualizado = [...cadastroCompleto, dados];

    localStorage.setItem("cadastroCompleto", JSON.stringify(cadastroAtualizado));
}

const btnEnviar = document.getElementById("btn-enviar");
btnEnviar.addEventListener("click", atualizarCadastro);