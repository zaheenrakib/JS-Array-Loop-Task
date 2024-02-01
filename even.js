const numbers = [12, 98, 5, 41, 23, 78, 46];

// for(let i = 0; i < numbers.length;i++){
//     let getNum =  (numbers[i]);
//     if (getNum % 2 === 0){
//         console.log(getNum);
//     }
// }

let i = 0;
while( i < numbers.length){
    const getNum2 = (numbers[i]);
    if(getNum2 % 2 ===0){
        console.log(getNum2);
    }
    i++;
}