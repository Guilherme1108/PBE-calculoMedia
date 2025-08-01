/********************************************************************************************************************
* Objetivos: Realizar cálculos de médias escolares, trabalhando com entrada de dados, variaveis, e condicionais
* Autor: Guilherme Moreira
* Data: 01/08/2025
* Versão: 1.0
 ********************************************************************************************************************/
// import da biliotéca do readline

/** Formas de váriaveis
 * LET -> permite criar um espaço em memória (variavel), deve-se obrigatoriamente utilizar apenas dentro de um bloco
 *        (IF, LOOP, Function, etc). Essa váriavel nasce e morre dentro de um bloco
 * 
 * VAR -> Permite criar um espaço em memória (váriavel), porem é um método mais antigo do JS, quase não se utiliza
 *        mais em projetos
 * 
 * CONST -> Permite criar um espaço em memória (constante), cujo conteúdo não sofra mudança durante o programa.
 *          Podemos criar uma const em qualquer parte do código. OBS: Recomenda-se que a CONST seja em MAIUSCULO
 * 
 * 
 * 
 * Formas de conversão de dados
 * String() -> Permite converter um objeto variavel em string
 * Number() -> Permite converter um objeto ou variavel em número (inteiro ou float)
 * ParseInt() -> Permite converter um objeto ou variavel em inteiro
 * ParseFloat() -> Permite converter um objeto ou variavel em decimal
 * boolean() -> Permite converter um objeto valor booleano (true/false)
 * Object() -> Permite converter uma variavel em objeto (ARRAY, JSON, Classe)
 * 
 * toUpperCase() -> converte uma string para MAIUSCULO
 * toLowerCase() -> converte uma string para minusculo
 * 
 * toFixed() -> permite limitar a quantidade de casas decimais
 * 
 * 
 * 
 * Operadores de Comparação
 * ==   -> validação de igualdade entre conteúdo
 * <    -> validação de menor valor
 * >    -> validação de maior valor
 * >=   -> validação de maior valor ou igualdade
 * <=   -> validação de menor valor ou igualdade
 * !=   -> validação de diferença entre conteúdos
 * ===  -> validação de igualdade entre conteúdos e igualdade nos tipos de dados
 * !==  -> validação de diferença entre conteúdos e igualdadde nos tipos de dados  (sempre verificar a documentação da linguagem)
 * !=!  -> validação de diferença entre conteúdos e diferença entre tipos de dados (sempre verificar a documentação da linguagem)
 * 
 * 
 * Operadores lógicos
 * E    AND    &&
 * OU   OR     ||
 * Não  NOT    !
 */



var readline = require('readline');

//criando um objeto para entrada e saida de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){

    // recebe o call back e converte para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase();
    
    //entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1;

        //entrada de dados da nota2
        entradaDeDados.question('Digite a nota 2: ', function(valor2){
            let nota2 = valor2;

            //entrada de dados da nota3
            entradaDeDados.question('Digite a nota 3: ', function(valor3){
                let nota3 = valor3;

                //entrada de dados da nota4
                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                    let nota4 = valor4;
                    

                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == '' ){
                        console.log('ERRO: Existem campos que não foram precisos.')
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){ /* não é obigatóio colocar o == true, o if sozinho consegu entrar em qual é verdadeiro ou falso */
                        console.log('ERRO: Não é possivel calcular com a entrada de letras.')
                        entradaDeDados.close();
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){
                        console.log('ERRO: Os valores informados precisam ser entre 0 até 10.')
                        entradaDeDados.close();
                    }else{
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
                        let statusAluno;

                        if(media < 5){
                            statusAluno = 'REPROVADO'
                        }else if(media >=5 && media < 7){
                            statusAluno = 'DE RECUPERAÇÃO'
                        }else if(media >=7 && media <= 10){
                            statusAluno = 'APROVADO'
                        };


                        console.log(`O Aluno(a) ${nomeAluno} teve a média: ${media.toFixed(1)} e está: ${statusAluno}`);

                        entradaDeDados.close(); /* fechando a aplicação */
                    }

                });//fechamento nota4
            });//fechamento nota3
        });//fechamento nota2
    });//fechamento nota1
});//fechamento do nome
