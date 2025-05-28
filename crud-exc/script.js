function chamarCadastro(){
    document.getElementById("container_cadastro").style.display ="flex"
    document.getElementById("container_principal").style.display ="none"
}
function chamarVoltar(){
    document.getElementById("container_cadastro").style.display = "none"
    document.getElementById("container_principal").style.display = "flex"
}
function adicionarItem(){
    let itemAdicionar = document.getElementById("none").value 
    let lista = document.getElementById("minhaslista")
    let li = document.createElement("li")
    let conteudo = 
    li.innerHTML = conteudo
    lista.appendChild(itemLista)
}
