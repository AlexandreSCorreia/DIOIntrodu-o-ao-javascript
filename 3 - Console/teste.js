console.log("Hello World!");

// função que retorna numeros pares
function returnEvenValues(array){
    let EvenNums = [];
    for(let i =0; i < array.lenght; i++){
        if(array[i] % 2 == 0){
            EvenNums.push(array[i]);
        }else{
            console.log(`${array[i]} não é par `);
        }
    }

    console.log('Os numero pares são:',EvenNums);
}

let array = [1,2,4,5,7,8]
returnEvenValues(array);

//https://drive.google.com/file/d/1OOkZSQhsVcassphzKP0LhecqvpRPXexO/view?usp=sharing