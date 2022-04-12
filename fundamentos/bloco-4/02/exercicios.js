//let numero = 7;

//for (contador =1; contador <= 9; contador +=1){
    //console.log(numero * contador);

//}

//let listaDeNomes = ["carlos", "joana", "maria", "pedro"];

//for(let index = 0; index < listaDeNomes.length; index +=1) {
//let mensagem= "boas vindas, " + listaDeNomes[index] + "!";
//console.log(mensagem)

//}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
total = 0;

1//console.log(numbers); 

for(let index = 0; index < numbers.length; index += 1) {
    total += numbers[index] / numbers.length;
    
}
//console.log(total);

if(total > 20) {
    console.log("maior que 20");
}else{
    console.log ("valor menor ou igual a 20");
}
