function chamarCadastro() {
    document.getElementById("container_cadastro").style.display = "flex";
    document.getElementById("container_principal").style.display = "none";
}

function chamarVoltar() {
    document.getElementById("container_cadastro").style.display = "none";
    document.getElementById("container_principal").style.display = "flex";
}

function adicionarItem() {
    let itemAdicionar = document.getElementById("nome").value;
    if (!itemAdicionar.trim()) return; // Não adiciona se estiver vazio
    
    let lista = document.querySelector(".conteudo_lista ol");
    let li = document.createElement("li");
    
    li.innerHTML = `
        <span>${itemAdicionar}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
            <path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z"></path>
        </svg>
    `;
    
    lista.appendChild(li);
    document.getElementById("nome").value = ""; // Limpa o input
    chamarVoltar(); // Volta para a lista após adicionar
}