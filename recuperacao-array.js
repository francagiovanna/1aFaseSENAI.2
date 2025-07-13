//1- A partir da lista de disciplinas, crie uma nova lista com apenas as disciplinas que possuem menos de 7
//caracteres, convertidas para minúscula e ordenadas alfabeticamente de forma decrescente (de Z a
//A).

const palavras = ["artes", "ti", "desenvolvimento", "logica", "matematica"];

const menosDe7 = palavras.filter(function (palavra) {
    return palavra.length < 7; // Filtra as palavras com menos de 7 caracteres
  }).map(function (palavra) {
    return palavra.toLowerCase(); // Converte todas para minúsculas
  })
  .sort(function (a, b) {
    // Ordena de forma decrescente (Z a A)
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });

console.log(menosDe7);

//2- Dado um array de objetos contendo informações sobre alunos e suas notas em diferentes matérias, crie
//um novo array que contenha o nome do aluno e a maior nota que ele obteve entre todas as disciplinas.

const aluno = [
    {nome: "ana", notas: [8, 9, 10]},
    {nome: "carlos", notas: [6, 7, 5]}
  ];
  
  const maiorNota = aluno.map(function (a) {
    return {
      nome: a.nome, 
      maiorNota: Math.max(...a.notas) // Encontra a maior nota usando o Math.max
    };
  });
  
  console.log(maiorNota);
  

//3- Dado um array de movimentações de estoque, onde cada objeto contém o tipo de operação ("compra"
//ou "venda") e a quantidade de itens movimentados, calcule o total de estoque final. Considerando que:
//"Compra" deve adicionar a quantidade ao estoque.
//"Venda" deve subtrair a quantidade do estoque.

const movimentacoes = [
    {operacao: "compra", quantidade: 200},
    {operacao: "venda", quantidade: 50},
    {operacao: "compra", quantidade: 120},
    {operacao: "venda", quantidade: 30}
];

const estoqueFinal = movimentacoes.reduce(function (totalEstoque, movimento) {
    if (movimento.operacao === "compra") {
        return totalEstoque + movimento.quantidade;
    } else if (movimento.operacao === "venda") {
        return totalEstoque - movimento.quantidade; 
    }
    return totalEstoque; 
}, 0);

console.log(estoqueFinal);

// .reduce
//console.log()

//4- Crie uma função que receba uma lista de cursos com nome e cargaHoraria. A função deve retornar uma
//nova lista com 20% de bônus de carga horária apenas para os cursos com mais de 40h.

const cursos = [
    {nome: "front-end", cargaHoraria:50},
    {nome: "exel", cargaHoraria:20}
]



//5- Dado o array de usuários, use os métodos apropriados para verificar:
// Se ao menos um usuário é administrador.
// Se todos os usuários estão ativos.


const usuarios = [
    {nome: "ana", ativo: true, admin: false},
    {nome: "paulo", ativo: true, admin: true},
    {nome: "joana", ativo: true, admin: false}
];

const algumUsuarioAdministrador = usuarios.some(function(usuario) {
    return usuario.admin === true;
});


const todosOsUsuariosAtivos = usuarios.every(function(usuario) {
    return usuario.ativo === true;
});

console.log(algumUsuarioAdministrador);  
console.log(todosOsUsuariosAtivos);     


// .some
// .every
// console.log()

//6- Crie uma função que busca um curso pelo nome ou uma mensagem "Curso não encontrado".:

const curso = [
    {nome: "logica de programação", nivel: "basico"},
    {nome: "react", nivel: "intermediario"}
]

.filter


//7- Dado um array de atividades, onde cada atividade contém o nome e o status de conclusão, crie uma
//nova lista com a descrição das atividades que ainda não foram finalizadas, no formato "Ação
//necessária: [nome da atividade]".

const tarefas = [
    {nome: "fazer compras", concluido:false},
    {nome: "fazer compras", concluido:true},
    {nome: "fazer compras", concluido:false},
    {nome: "fazer compras", concluido:true}
]

const tarefas2 = [
    {nome: "fazer compras", concluido:false, necessaria:""},
    {nome: "fazer compras", concluido:true, necessaria: ""},
    {nome: "fazer compras", concluido:false, necessaria: ""},
    {nome: "fazer compras", concluido:true, necessaria: ""}
]

.map
