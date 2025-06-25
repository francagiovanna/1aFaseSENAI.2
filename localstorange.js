const usuario = {
    nome: "alex"
    idade: 22
}

const endereco = "floripa"
localStorage.setItem("endereço", endereco)
localStorage.setItem("usuario", JSON.parse(usuario))
console.log(usuariolocalstorange.nome)

//
function cadastro(){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let usuarios = localStorange.getItem("usuarios")
    if(usuario){
        let usuariosConvertido = JSON.parse(usuario)

        let novoUsuario = {
            nome: nome, 
            idade: idade 
        }
             
        let novoUsuario = {
            usuariosConvertido.push(novoUsuario)
        }
    }
}