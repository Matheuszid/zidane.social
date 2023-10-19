const cpf = document.getElementById('CPF'); // Seleciona o input de CPF

cpf.addEventListener('blur', () => {
    cpf.value = cpf.value.replace(/\D/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Formata o CPF
    console.log(cpf.value);
});

cpf.addEventListener('input', (event) => {

    cpf.value = cpf.value.replace(/\D/g, '') // Remove tudo o que não é dígito

});

cpf.addEventListener('focus', (event) => {cpf.value = ''; }); // Limpa o valor do input ao ganhar foco



let btn = document.querySelector('.fa-eye-slash'); // Seleciona o botão de mostrar senha

btn.addEventListener('click', () => {
    let input = document.getElementById('SENHA' , 'CONFIRMARSENHA'); // Seleciona o input de senha
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');  // Alterna entre mostrar e esconder a senha
    }
});



let password = document.getElementById("SENHA") 



// Validação de senha
function temLetraMinuscula(password) {
    for (var i = 0; i < password.length; i++) {
        if (password[i] >='a' && password[i] <= 'z') {
            return true;
        }
    }
    return false;
}


// Validação de senha Letra Minuscula
var checkbox = document.getElementById('checkbox');
password.addEventListener('change', () => {
    if(temLetraMinuscula(password.value)) {
        checkbox1.checked = true;
    } else{
        checkbox1.checked = false;
    }
});


// Validação de senha Letra Maiuscula
var checkbox3 = document.getElementById('checkbox3');
function temLetraMaiuscula(password) {
    for (var i = 0; i < password.length; i++) {
        if (password[i] >='A' && password[i] <= 'Z') {
            return true;
        }
    }
    return false;
}
password.addEventListener('change', () => {
    if(temLetraMaiuscula(password.value)) {
        checkbox3.checked = true;
    } else{
        checkbox3.checked = false;
    }
});



// Validação de senha Numero
var checkbox4 = document.getElementById('checkbox4');
function temNumero(password) {
    for (var i = 0; i < password.length; i++) {
        if (password[i] >='0' && password[i] <= '9') {
            return true;
        }
    }
    return false;
}
password.addEventListener('change', () => {
    if(temNumero(password.value)) {
        checkbox4.checked = true;
    } else{
        checkbox4.checked = false;
    }

});



// Validação de senha Caractere Especial
var checkbox5 = document.getElementById('checkbox5');
function temCaractereEspecial(password) {
    for (var i = 0; i < password.length; i++) {
        if (password[i] == '@' || password[i] == '#' || password[i] == '$' || password[i] == '%' || password[i] == '&') {
            return true;
        }
    }
    return false;
}
password.addEventListener('change', () => {
    if(temCaractereEspecial(password.value)) {
        checkbox5.checked = true;
    } else{
        checkbox5.checked = false;
    }
});




// Validação de senha Tamanho
var checkbox2 = document.getElementById('checkbox2');
var passwordInput = document.getElementById('SENHA');
function temTamanho(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
}
passwordInput.addEventListener('change', () => {
    if(temTamanho(passwordInput.value)) {
        checkbox2.checked = true;
    } else{
        checkbox2.checked = false;
    }
});




// Validação de senha Confirmar Senha
let button = document.getElementById('btn');
button.disabled = true;
password.addEventListener('change', () => {
if(checkbox2.checked == true && checkbox1.checked == true && checkbox3.checked == true && checkbox4.checked == true && checkbox5.checked == true) {
    button.disabled = false;}
 else{
        button.disabled = true;

    }

});    