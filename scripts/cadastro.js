function fazerCadastro() {
    var nome = document.getElementById('campo-nome-completo').value
    var semha = document.getElementById('campo-cadastro-senha').value

    if(nome === ""){
        document.getElementById('campo-cadastro-nome-completo').classList.add('input-error')
        document.getElementById('campo-cadastro-nome-completo').focus()
        document.getElementById('error-nome').hidden =false
        document.getElementById('error-nome').innerText = "O nome é obrigatório"
    }else if(senha > 8 ){
        document.getElementById('campo-cadastro-senha').classList.add('input-error')
        document.getElementById('error-senha').hidden = false
        document.getElementById('error-senha').innerText = "A senha deve no minimo 8 caracteres"
    } else{
        document.getElementById('cadastro-button').disabled = true
        document.getElementById('cadastro-button').style.opacity = 0.5
        document.getElementById('cadastro-button').innerText = "Cadastrando..." 
    }
    

}