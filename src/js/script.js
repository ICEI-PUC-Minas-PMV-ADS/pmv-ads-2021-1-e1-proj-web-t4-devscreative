// Cadastro
function cadastrar(){
    var username = document.getElementById('username');
    var useremail = document.getElementById('useremail');
    var userpass = document.getElementById('userpass');
    var userrepeatpass = document.getElementById('userrepeatpass');

    var dados = JSON.parse(localStorage.getItem('dadosPessoas'));

    if(dados == null){
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





// Login
function logar(){
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");

    console.log(email.value+pass.value);

    if (email.value == "teste@teste.com" && pass.value == "teste"){
        localStorage.setItem("acess", true);

        window.location.href = "index.html";

    }else{
        alert("usuario ou senha invalidos");
    }
}




var logado = false;

if(localStorage.getItem("dadosPessoas") == "true"){
    logado = true;
    console.log("entrou");
};
























function cadastrardae(){
    if(validName && validEmail && validPass && validrepeatPass){
        let listaUser = JSON.parse(localStorage.getItem("listaUser") || '[]') 

        listaUser.push(
        {
            nameCad: username.value,
            emailCad: email.value,  
            passCad: pass.value
        }    
        )

        localStorage.setItem("listaUser", JSON.stringify(listaUser))


    } else {


    }
}
    