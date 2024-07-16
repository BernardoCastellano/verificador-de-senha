function verifyPassword() {
    let inPassword = document.getElementById('senha');
    let password = inPassword.value;

    let erro = [];

    if (password.length < 8 || password.length > 15) {
        erro.push('A senha deve conter entre 8 e 15 caracteres');
    }
    if (password.match(/[0-9]/g) == null) {
        erro.push('A senha deve conter pelo menos um número')
    }

    if (!password.match(/[\W/!@#$%^&*()_-]/g)) {
        erro.push('A senha deve conter pelo menos um caractere especial')
    }
    if (erro.length == 0) {
        alert('Senha válida!!😎')
    } else {
        alert(`Ouve um erro: \n${erro.join(', \n')}`);
        console.log(`Ouve um erro: ${erro.join(', \n')}`)
        document.getElementById('senha').value = '';
    }

}

let btnVerify = document.getElementById('btnVerify');
btnVerify.addEventListener('click', verifyPassword);