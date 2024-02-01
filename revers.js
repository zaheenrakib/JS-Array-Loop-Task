const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const reversed_num = [];
// for(let i = 0;i < colors.length; i++){
//     const num = colors[i];
//     reversed_num.unshift(num);
// }

// console.log(reversed_num)

const rev_rev_number = [];
for (let i = colors.length -1 ; i >= 0; i --){
    const num = colors[i];
    console.log(num);
    rev_rev_number.push(num)
}
console.log(rev_rev_number);