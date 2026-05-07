// let arr = [2,3,4,5];
// for(var i = 0; i<4; i++){
//     console.log(arr[i]);

// }

// console.log(arr);
// arr[2] = arr[2]+12;
// console.log(arr);
// arr = [];
// console.log(arr);

let arr = [23, 4, 56, , 7, 7, 8, 7, 76];
arr.push(43);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(2);
console.log(arr);

console.log(arr);
console.log(arr.indexOf(7));
console.log(arr.includes(45));

let arr1 = [23, 44, 56, 70, 8, 89, 98];
arr1.sort();
console.log(arr1);



arr.forEach((element) => {
  console.log(element);
});
