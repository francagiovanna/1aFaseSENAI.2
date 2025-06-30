//Array Entrega
const numeros = [5, 12, 8, 130, 44, 7, 3, 19, 22];
const nomes = ["Ana", "Carlos", "Beatriz", "Daniel", "Eduarda", "Bruno"];
const produtos = [
    { nome: "Camiseta", preco: 29.9, categoria: "Roupas" },
    { nome: "Notebook", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 59.9, categoria: "Eletrônicos" },
    { nome: "Meias", preco: 9.9, categoria: "Roupas" },
    { nome: "Teclado", preco: 120, categoria: "Eletrônicos" }
];

// Exercícios com numeros (nível iniciante)
const maioresQue10 = numeros.filter(function (n) { return n > 10 });
const dobrados = numeros.map(function (n) { return n * 2 });
const somaTotal = numeros.reduce(function (acumulador, n) { return acumulador + n }, 0);
const maiorNumero = Math.max.apply(null, numeros);
const menorNumero = Math.min.apply(null, numeros);
const ordenadoCrescente = numeros.slice().sort(function (a, b) { return a - b });
const impares = numeros.filter(function (n) { return n % 2 !== 0 });
const todosMaioresQue3 = numeros.every(function (n) { return n > 3 });
const existeMaiorQue100 = numeros.some(function (n) { return n > 100 });
const media = somaTotal / numeros.length;

// Exercícios com nomes (nível iniciante)
const nomesOrdenados = nomes.slice().sort();
const nomesComMaisDe5 = nomes.filter(function (nome) { return nome.length > 5 });
const nomesMinusculos = nomes.map(function (nome) { return nome.toLowerCase() });
const algumComecaComB = nomes.some(function (nome) { return nome[0] === "B" });
const encontrarDaniel = nomes.find(function (nome) { return nome === "Daniel" });
const quantidadeLetras = nomes.map(function (nome) { return nome.length });
const nomesJuntos = nomes.join(", ");

// Exercícios com produtos (nível iniciante)
const eletronicos = produtos.filter(function (p) { return p.categoria === "Eletrônicos" });
const nomesProdutos = produtos.map(function (p) { return p.nome });
const precosComDesconto = produtos.map(function (p) { return (p.preco * 0.9).toFixed(2) });
const totalProdutos = produtos.reduce(function (acc, p) { return acc + p.preco }, 0);
const maisCaro = produtos.reduce(function (maisCaro, p) { return p.preco > maisCaro.preco ? p : maisCaro });
const ordenadoPorPreco = produtos.slice().sort(function (a, b) { return a.preco - b.preco });
const agrupadosPorCategoria = produtos.reduce(function (acc, p) {
    if (!acc[p.categoria]) acc[p.categoria] = [];
    acc[p.categoria].push(p);
    return acc;
}, {});
function filtrarPorCategoria(cat) {
    return produtos.filter(function (p) { return p.categoria === cat });
}
const nomePreco = produtos.map(function (p) { return { nome: p.nome, preco: p.preco } });
const todosMaioresQue5 = produtos.every(function (p) { return p.preco > 5 });

// Desafios com Lógica (nível iniciante)
const quadradosPares = numeros.filter(function (n) { return n % 2 === 0 }).map(function (n) { return n * n });
const nomeMaisLongo = nomes.reduce(function (maior, atual) {
    return atual.length > maior.length ? atual : maior;
});
const terminaComVogal = nomes.every(function (nome) {
    return /[aeiouáéíóú]$/i.test(nome);
});
const unidos = numeros.concat(nomes);
const roupasBaratas = produtos.filter(function (p) {
    return p.preco < 100 && p.categoria === "Roupas";
}).map(function (p) { return p.nome });
function mediaEletronicos() {
    const eletronicos = produtos.filter(function (p) { return p.categoria === "Eletrônicos" });
    const total = eletronicos.reduce(function (acc, p) { return acc + p.preco }, 0);
    return (total / eletronicos.length).toFixed(2);
}