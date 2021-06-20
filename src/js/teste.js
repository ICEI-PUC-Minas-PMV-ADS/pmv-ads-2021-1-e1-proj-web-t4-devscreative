// Cadastro
function cadastrarjs(){
    var username = document.getElementById('username');
    var lastname = document.getElementById('lastname')
    var useremail = document.getElementById('useremail');
    var endress = document.getElementById('endress');
    var number = document.getElementById('number');
    var complement = document.getElementById('complement');
    var cep = document.getElementById('cep')
    var userpass = document.getElementById('userpass');
    var userrepeatpass = document.getElementById('userrepeatpass');
    
    
    var dados = JSON.parse(localStorage.getItem('dadosPessoas'));

    if(dados == null){
        localStorage.setItem("dadosPessoas", "[]");
        dados = [];
    }

    var auxRegistro = {
        nome: username.value,
        ultimoNome: lastname.value,
        email: useremail.value,
        endereco: endress.value,
        complemento: complement.value,
        cep: cep.value,
        senha: userpass.value,
        repetirSenha: userrepeatpass.value
    }

    dados.push(auxRegistro);
    
    localStorage.setItem("dadosPessoas", JSON.stringify(dados));
    alert("Registro Incluido com sucesso");

    username.value = "";
    lastname.value = "";
    useremail.value = "";
    endress.value = "";
    number.value = "";
    complement.value = "";
    cep.value = "";
    userpass.value = "";
    userrepeatpass.value = "";
}
