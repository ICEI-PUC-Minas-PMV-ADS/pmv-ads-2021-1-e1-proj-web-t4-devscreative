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