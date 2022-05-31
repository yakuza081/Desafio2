alert('Bem vindo ao Simulador de investimento, para continuarmos por favor preencha seus dados.');

let nome = prompt('Informe seu nome:');

let sexo = prompt('Informe seu  sexo, [F] para feminino, [M] para masculino:');
    
if(sexo === 'M'){
    sexo = 'Masculino'
}else if (sexo ==='F'){
    sexo = 'Feminino'   
}else 
   sexo = 'Não indetificado'
    
let idade = Number(prompt('Informe sua idade;'));

let rendaMensal = Number(prompt('Informe sua renda mensal em formato R$:'))
    

alert=('Para definirmos o seu perfil de investidor reponda as seguintes perguntas.');

let formação = prompt("Você tem formação na área financeira?\n1. Sim, sem experiência.\n2. Sim, com experiência.\n3. Não, mas tenho experiência.\n4. Não, com pouca experiência.\n5. Não, e não tenho experiência.\n\nDigite o número da opção que você se enquadra.");
/*
1. Sim, sem experiência (10% conservador, 90% dinâmico)
2. Sim, com experiência (35% dinâmico, 65% arrojado)
3. Não, mas tenho experiência (77% dinâmico, 23% arrojado)
4. Não, com pouca experiência (64% conservador, 36% dinâmico)
5. Não, e não tenho experiência (75% ultraconservador, 25% conservador)*/

let produto  = prompt  ("Qual produto você conhece ?\n1. Poupança, depósito a prazo.\n2. Tesouro direto, renda variável.\n3. Produtos 1 e 2.\n4. Nunca investiu, mas conhece algum produto.\n5. Nunca investiu e não conhece nenhum produto.\n\n Digite o número que você se enquadra.");


/*
1. Poupança, depósito a prazo (60% Ultraconservador, 40% conservador)
2. Tesouro Direto, renda variável (40% dinâmico, 60% arrojado)
3. Produtos 1 e 2 (22% dinâmico, 78% arrojado)
4. Nunca investiu, mas conheço alguns produtos (73% conservador, 27% dinâmico)
5. Nunca investi e não conheço nenhum (60% ultraconservador, 40% conservador)*/


const perfil = {
    Ultraconservador: "",
    Conservador: "",
    Dinamico: "",
    Arrojado: ""
    }



switch (formação) {
    case "1":
        perfil.Conservador = 0.1
        perfil.Dinamico = 0.9
        break;

    case "2": 
        perfil.Dinamico = 0.4
        perfil.Arrojado = 0.6
        break;

    case "3":
        perfil.Dinamico = 0.5
        perfil.Arrojado = 0.5
        break;

    case "4":
        perfil.Conservador = 0.6
        perfil.Dinamico = 0.4
        break;

    case "5":
        perfil.Ultraconservador = 0.6
        perfil.Conservador = 0.4
        break;

    default:
        perfil = "Não indentificado"
        perfil = "Não indentificado"
        break;
}

switch (produto) {
    case "1":
        perfil.Ultraconservador = 0.6
        perfil.Conservador = 0.4
        break;

    case "2": 
        perfil.Dinamico = 0.4
        perfil.Arrojado = 0.6
        break;

    case "3":
        perfil.Dinamico = 0.3
        perfil.Arrojado = 0.7
        break;

    case "4":
        perfil.Conservador = 0.7
        perfil.Dinamico = 0.3
        break;

    case "5":
        perfil.Ultraconservador = 0.6
        perfil.Conservador = 0.4
        break;

    default:
        perfil = "Não indentificado"
        perfil = "Não indentificado"
        break;
}

    perfil.Ultraconservador = perfil.Ultraconservador /2
    perfil.Arrojado = perfil.Arrojado /2
    perfil.Conservador = perfil.Conservador /2
    perfil.Dinamico = perfil.Dinamico /2


    let resultado   = Object.keys(perfil).sort(function (a,b){
        return perfil[a] > perfil[b]?-1:
        perfil[b] > perfil[a]?1:0;
    })[0];

    
    
    let tipoDeInvestimento 
    if (resultado == 'Ultraconservador'||resultado == 'Conservador'){
            tipoDeInvestimento ='Renda fixa'
    }else if(resultado == 'Dinamico'|| resultado =='Arrojado'){
            tipoDeInvestimento = 'Renda variável, ação'
    }
    

   /* Investimento Renda fixa juros simples
A fórmula para este cálculo é: J = C * i * t, onde J se refere à soma dos juros ao fim do
período, C é o capital investido inicialmente, i é a taxa de juros (que, para o cálculo, sempre
deve ser convertida em decimal) e t é o tempo de aplicação.

Investimento Renda fixa juros composto
A fórmula para calcular o rendimento de um investimento em renda fixa com juros
compostos é M = C * (1 + i)^t, onde M corresponde ao valor final, C é o valor aplicado
inicialmente, i é a taxa de juros, ou seja, a rentabilidade, e t é o tempo de aplicação.*/

if(tipoDeInvestimento =='Renda fixa'){


/*Juros Simples*/
let c = Number(prompt('Capital inicial que será investido ?'));

let J= Number(prompt('Taxa de juros desejada ?'))/100;

let t = Number(prompt('Tempo de aplicação'));

var jurosS = (c*J*t)
var lucroP = jurosS.toFixed(2)
/*Juros Composto*/
var jurosC= c *Math.pow((1 + J),t);
var lucroP2 = (jurosC - c).toFixed(2);

console.log(
    `SIMULADOR DE INVESTIMENTO
     ********************
Nome: ${nome}
Sexo: ${sexo}
Idade: ${idade} anos
Renda Mensal: R$ ${rendaMensal}
Perfil de investidor: ${resultado}
Tipo de Investimento: ${tipoDeInvestimento}
-Simulação de investimentos-
    -Juros Simples- 
Lucro final: R$ ${lucroP}
    -Juros Composto-    
Lucro final: R$ ${lucroP2}
`);
}else{ 

    var açãoC = Number(prompt('Insira o valor da ação que deseja comprar'));
    var açãoV = Number(prompt('Insira o valor de quanto você quer vender a ação'));
    var quantidade = Number(prompt('Quantas ações você deseja comprar?'))

    var açãoF = (açãoV/açãoC)*100-100
    var lucroA = (açãoC*(açãoF/100)*quantidade)

    console.log(
    `SIMULADOR DE INVESTIMENTO
     ********************
Nome: ${nome}
Sexo: ${sexo}
Idade: ${idade} anos
Renda Mensal: R$ ${rendaMensal}
Perfil de investidor: ${resultado}
Tipo de Investimento: ${tipoDeInvestimento}
-Simulação de investimentos-
Lucro final: R$ ${lucroA}
`);
}












    


    
    

    


