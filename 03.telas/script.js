// let nome, email, senha
let usuario = {
    nome:'um',
    email:'dois',
    senha:'nuvem'
}
function cadastro(){
    nome = document.getElementById('inpCadNome').value
    email = document.getElementById('inpCadEmail').value
    senha = document.getElementById('inpSenha').value
    alert("Cadastrado com sucesso!!")
    
    console.log(usuario)

    mostrarLogin()
}
function login(){
    let nome = document.getElementById('inpCadNome').value
    let senha = document.getElementById('inpCadSenha').value
    
    if(nome === usuario.nome && senha === usuario.senha){
        alert("login efetuado com sucesso")
        limparInputs()
        mostrarProdutos()
    }else{
        alert("login efetuado sem sucesso")
    }
}
function mostrarLogin(){
    document.getElementById('login').style.display = 'flex'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
}
function mostrarCadastro(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'flex'
    document.getElementById('produtos').style.display = 'none'
    document.getElementById('inpCadNome').focus()
}
function mostrarProdutos(){
    esconderTodas()
    document.getElementById('produtos').style.display = 'flex'

}
function esconderTodas(){
    document.getElementById('login').style.display = 'none'
    document.getElementById('cadastro').style.display = 'none'
    document.getElementById('produtos').style.display = 'none'
}
function limparInputs(){
    document.getElementById("inpCadNome").value
    document.getElementById("inpCadEmail").value
    document.getElementById("inpCadEmail").value
    document.getElementById("inpCadSenha").value

    document.getElementById('inpCadNome').value = ''
    document.getElementById('inpCadSenha').laue = ''
}