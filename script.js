function validaform() {
    if (document.getElementById("name").value.length < 3) {
        alert('Por favor, preencha o campo nome');
        document.getElementById("name").focus();
        return false
    }
    if (document.getElementById("telefone").value.length < 11) {
        alert('Por favor, preencha o campo telefone');
        document.getElementById("telefone").focus();
        return false
    }
    if (document.getElementById("cpf").value.length < 11) {
        alert('Por favor, preencha o campo cpf');
        document.getElementById("cpf").focus();
        return false
    }
    if (document.getElementById("github").value.length < 1) {
        alert('Por favor, preencha o campo github');
        document.getElementById("github").focus();
        return false
    }
    if (document.getElementById("email").value.length < 1) {
        alert('Por favor, preencha o campo email');
        document.getElementById("email").focus();
        return false
    }
}