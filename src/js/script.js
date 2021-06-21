// Cadastro
function cadastrar() {
    var username = document.getElementById('username');
    var useremail = document.getElementById('useremail');
    var userpass = document.getElementById('userpass');
    var userrepeatpass = document.getElementById('userrepeatpass');

    var dados = JSON.parse(localStorage.getItem('dadosPessoas'));

    if (dados == null) {
        localStorage.setItem("dadosPessoas", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: username.value,
        email: useremail.value,
        senha: userpass.value,
        repetirSenha: userrepeatpass.value
    }

    dados.push(auxRegistro);

    localStorage.setItem("dadosPessoas", JSON.stringify(dados));
    alert("Registro Incluido com sucesso");

    username.value = "";
    useremail.value = "";
    userpass.value = "";
    userrepeatpass.value = "";
}


//login 
const signUp = e => {
    let formData = {
        email: document.getElementById("email").value,
        pass: document.getElementById('pass').value
    }
    localStorage.setItem('formData', JSON.stringify(formData));

    dispData();
    e.preventDefault();
}

function dispData() {
    if (localStorage.getItem('formData')) {
        let { email, pass } = JSON.parse(localStorage.getItem('formData'));
        var output = document.getElementById('output');
        output.innerHTML = `
                <table>
                    <tbody>
                        <tr>
                            <td>Endereço de Email</td>
                            <td>${email}</td>
                        </tr>
                        <tr>
                            <td>Senha</td>
                            <td>${pass}</td>
                        </tr>
                    </tbody>
               </table>
            `;
    }
}
