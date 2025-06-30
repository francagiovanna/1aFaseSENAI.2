// let nome, email, senha

inicializar()

let usuarios = []

// let nomeTeste = ["Usuario 1", "usuario 2"]



let usuario = {
    nome:'',
    email:'',
    senha:''
}
function cadastro(){
    let usuario = {
        nome: document.getElementById('inpCadNome').value,
        email: document.getElementById('inpCadEmail').value,
        senha: document.getElementById('inpSenha').value

    }
    usuarios.push(usuario)
    limparInputs()
    mostrarLogin()

    alert("Cadastrado com sucesso!!")

    console.log(usuarios) //só pra teste

}
function login(){
    let nome = document.getElementById('inpCadNome').value
    let senha = document.getElementById('inpCadSenha').value
    
    if(nome === usuario.nome || nome === usuario.email && senha === usuario.senha){
        alert("login efetuado com sucesso")
        limparInputs()
        mostrarProdutos()
    }else{
        alert("login efetuado sem sucesso")
    }
}
function produtos(){
    nome = document.getElementById('inpCadNome').value
    email = document.getElementById('inpCadEmail').value
    senha = document.getElementById('inpSenha').value
    alert("Produto cadastrado com sucesso!!")
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
    document.getElementById('navbar').style.display = 'flex'

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
function inicializar(){

}