//o que é uma concatenação
//o que e dicionario
//o que é arrays
//o que é uma variavel
//qual a diferença entre front end e backend

//Uma ilustração:
//Imagine que você precisa organizar seu guarda-roupa, e para isso, deve guardar seus chapéus em uma gaveta, suas calças em outra e suas meias em outra. Um array é uma estrutura semelhante ao guarda-roupa, onde você pode guardar “coisas” em um espaço reservado.

//O que é Array (Vetor ou Matriz):
 //é uma variável especial que pode conter mais de um valor.
 //Os arrays são estruturas que servem para guardar dados, e organizá-los. Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos. Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice. Você pode guardar seus chapéus na gaveta 1, suas calças na gaveta 2 e as meias na gaveta 3, e sempre que precisar de calças, chapéus ou meias, vai saber em que gaveta buscar.


//Para que serve?
//De forma mais robusta, um array é uma estrutura de dados que serve para guardar elementos em um espaço da memória. Estes espaços da memória são chamados de variáveis

//Quais os tipos de arrays?
//Arrays indexados: arrays com índices numéricos; 
//Arrays associativos: arrays onde cada índice é referenciado por uma chave; 
//Arrays multidimensionais: são matrizes, isto é, arrays que contém um ou mais arrays.

//Quais as vantagens de usar um arrays?
//Eles possibilitam agrupar valores do mesmo tipo. Ou seja, podemos formar grupos ordenados de variáveis em um único lugar. E dessa forma é possível fazer uma verificação dentro de um Array, sem ter que fazer isso de forma individual

//Diferença entre array e lista:
//O array usa menos memória do que a lista, é mais rápido nas operações de leitura e possibilita executar operações matemáticas sobre todos os itens de forma otimizada.


//Outra forma de acessar os elementos de um array é iterando sobre ele, ou seja, percorrendo todos os elementos através de estruturas de repetição como while, for, e forEach().
//Nem o tamanho e nem os tipos de elementos são fixos em um array, já que podemos acrescentar e remover os seus elementos. Vamos conhecer alguns métodos bastante utilizados no dia a dia de um programador ou programadora ao lidar com arrays.

//ar listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];

//Acessando um elemento do array

//var primeiroItem = listaDeFrutas[0]; // Pega o item 'Maçãs'
//var segundoItem = listaDeFrutas[1]; // Pega o item 'Uvas'
//var terceiroItem = listaDeFrutas[2]; // Pega o item 'Bananas'


//Outra forma de acessar os elementos de um array é iterando sobre ele, ou seja, percorrendo todos os elementos através de estruturas de repetição como while, for, e forEach().

//listaDeFrutas.forEach(function (item, indice) {
    //console.log(item, indice);
  //});

  // Maçãs 0
  // Uvas 1
  // Bananas 2
  // Abacaxi 3
  // Morangos 3


  //Acessando um elemento pelo seu índice
//var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
//var pos = listaDeFrutas.indexOf('Bananas');
//console.log(pos)

//Para adicionar um elemento ao final do array podemos usar o push().

  
  //var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
//listaDeFrutas.push('Laranjas');
//console.log(listaDeFrutas)



//Para adicionar um elemento no início do array podemos usar o unshift().
//var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
//listaDeFrutas.unshift('Laranjas');
// ['Laranjas','Maçãs','Uvas','Bananas','Abacaxi','Morangos]

//Remover um elemento do Array JavaScript
//var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
//listaDeFrutas.shift();
// ['Uvas','Bananas','Abacaxi','Morangos']


//Podemos também remover um item a partir de seu índice com o método splice()
//Var listaDeFrutas = ['Maçãs','Uvas','Bananas','Abacaxi','Morangos'];
//var pos = listaDeFrutas.indexOf('Abacaxi'); //pos = 3
//listaDeFrutas.splice(pos, 1)
// ['Maçãs','Uvas','Bananas','Morangos']