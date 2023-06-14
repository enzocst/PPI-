let login = "";
let senha = "";

do {
    login = prompt("Digite seu login");
    senha = prompt("Digite sua senha");
    if (login == senha){
        window.alert("Login e senha não podem ser o mesmo!");
        
    }
} while(login == senha);

alert("Login bem sucedido");

