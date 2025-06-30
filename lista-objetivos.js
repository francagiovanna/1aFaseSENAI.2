// 1. Catálogo de Produtos
const catalogo = [
    { nome: "Celular", preco: 1500 },
    { nome: "Fone de Ouvido", preco: 200 },
    { nome: "Monitor", preco: 800 }
];
function buscarProduto(nome) {
    return catalogo.find(function (p) { return p.nome === nome });
}

// 2. Sistema de Biblioteca
const livro = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    emprestado: false,
    emprestar: function () { this.emprestado = true },
    devolver: function () { this.emprestado = false }
};

// 3. Conversor de Temperatura
const conversor = {
    celsiusParaFahrenheit: function (c) { return (c * 9 / 5) + 32 },
    fahrenheitParaCelsius: function (f) { return (f - 32) * 5 / 9 }
};

// 4. Agenda de Contatos
const agenda = {
    contatos: [],
    adicionar: function (nome) { this.contatos.push(nome) },
    remover: function (nome) {
        this.contatos = this.contatos.filter(function (c) { return c !== nome });
    },
    listar: function () { return this.contatos }
};

// 5. Relatório de Notas
const aluno = {
    nome: "João",
    notas: [7, 8, 6],
    media: function () {
        const soma = this.notas.reduce(function (acc, n) { return acc + n }, 0);
        return soma / this.notas.length;
    }
};

// 6. Carrinho de Compras
const carrinho = {
    itens: [],
    adicionarItem: function (nome, qtd, valor) {
        this.itens.push({ nome: nome, quantidade: qtd, valor: valor });
    },
    removerItem: function (nome) {
        this.itens = this.itens.filter(function (item) { return item.nome !== nome });
    },
    total: function () {
        return this.itens.reduce(function (acc, item) {
            return acc + (item.quantidade * item.valor);
        }, 0);
    }
};

// 7. Filtrar Alunos Aprovados
const alunos = [
    { nome: "Ana", media: 7 },
    { nome: "Lucas", media: 5 },
    { nome: "Maria", media: 8 }
];
const aprovados = alunos.filter(function (a) { return a.media > 6 }).map(function (a) { return a.nome });

// 8. Conversor de Moedas com Objeto
const moeda = {
    taxas: {
        USD: 5.2,
        EUR: 6.1
    },
    converter: function (valor, de, para) {
        const emReais = valor / this.taxas[de];
        return (emReais * this.taxas[para]).toFixed(2);
    }
};

// 🔴 Desafios com Objetos

// 1. Banco com Múltiplas Contas
const banco = {
    contas: [
        { nome: "Alice", saldo: 1000 },
        { nome: "Bob", saldo: 500 }
    ],
    depositar: function (nome, valor) {
        const conta = this.contas.find(function (c) { return c.nome === nome });
        if (conta) conta.saldo += valor;
    },
    sacar: function (nome, valor) {
        const conta = this.contas.find(function (c) { return c.nome === nome });
        if (conta && conta.saldo >= valor) conta.saldo -= valor;
    },
    saldoTotal: function () {
        return this.contas.reduce(function (acc, c) { return acc + c.saldo }, 0);
    }
};

// 2. Sistema de Votação
const votacao = {
    votos: {},
    votar: function (candidato) {
        if (!this.votos[candidato]) this.votos[candidato] = 0;
        this.votos[candidato]++;
    },
    maisVotado: function () {
        let max = 0;
        let eleito = "";
        for (let candidato in this.votos) {
            if (this.votos[candidato] > max) {
                max = this.votos[candidato];
                eleito = candidato;
            }
        }
        return eleito;
    }
};

// 3. Agenda Semanal de Compromissos
const compromissos = {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],
    adicionar: function (dia, evento) { this[dia].push(evento) },
    remover: function (dia, evento) {
        this[dia] = this[dia].filter(function (e) { return e !== evento });
    },
    listar: function (dia) { return this[dia] }
};

// 4. Gerador de Fichas de RPG
function gerarPersonagem(nome) {
    return {
        nome: nome,
        forca: Math.floor(Math.random() * 10 + 1),
        destreza: Math.floor(Math.random() * 10 + 1),
        vida: Math.floor(Math.random() * 100 + 1)
    };
}
const personagens = [
    gerarPersonagem("Aragorn"),
    gerarPersonagem("Legolas"),
    gerarPersonagem("Gimli")
];

// 5. Validador de Formulário com Objeto
function validarFormulario(campos) {
    const erros = {};
    if (!campos.nome || campos.nome.length < 3) erros.nome = "Nome inválido";
    if (!campos.email || !campos.email.includes("@")) erros.email = "Email inválido";
    if (!campos.idade || campos.idade < 0) erros.idade = "Idade inválida";
    return Object.keys(erros).length === 0 ? { sucesso: true } : { sucesso: false, erros: erros };
}

// 6. Sistema de Gestão de Projetos
const projeto = {
    nome: "Site",
    status: "Em andamento",
    tarefas: [
        { nome: "HTML", data: "01/07", status: "feito" },
        { nome: "CSS", data: "02/07", status: "pendente" }
    ],
    alterarStatus: function (nova) { this.status = nova },
    listarPorStatus: function (filtro) {
        return this.tarefas.filter(function (t) { return t.status === filtro });
    }
};

// 7. Simulador de Jogo de Dados
const jogoDeDados = {
    historico: [],
    rolar: function () {
        const dado1 = Math.ceil(Math.random() * 6);
        const dado2 = Math.ceil(Math.random() * 6);
        this.historico.push(dado1, dado2);
        return [dado1, dado2];
    },
    contarNumero: function (num) {
        return this.historico.filter(function (n) { return n === num }).length;
    }
}