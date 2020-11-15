// var lesson1 = document.getElementById("lesson1");
// var lesson2 = document.getElementById("lesson2");
// var lesson3 = document.getElementById("lesson3");
// var lesson4 = document.getElementById("lesson4");
// var lesson5 = document.getElementById("lesson5");
// var lesson6 = document.getElementById("lesson6");
// var lesson7 = document.getElementById("lesson7");

const arr = Array(10).fill(1).map(r => Math.floor( Math.random()*10 ));
// Tạo 10 phần tử số nguyên dương bất kì

console.log(arr)
// lesson1.textContent = "Mảng vừa tạo : [" + arr + "]";
console.log('===========')

// Mảng có số chẵn ở vị trí lẻ

const newArr2 = arr.filter((value , index) => {
    if(value % 2 === 0 && index % 2 !== 0){
        return value;
    }
}) ;

console.log(newArr2)
console.log('===========')
//Mảng có các số nguyên tố

function checkSNT(n) {
    if (n < 2) {
        return false
    };
    if (n === 2) return true;
    if (n % 2 === 0)return false;
    for (var i = 3 ; i <= n/2 ; i++) {
        if(n % i == 0) {
            return false;
        }
        break;
    }
    return n;
}

const newArr1 = arr.filter(checkSNT);
console.log(newArr1)

// for( var i =  0 ; i < arr.length - 1 ; i++ ) {
//     if(checkSNT(arr[i])) {
//         newArr1.push(arr[i]);
//     }
// }

// // Sap xep mang
// arr.sort( function(a,b) {
//     return a-b;
// })

//Count
// function countArray(array) {
//     return array.reduce( function(a, b) {
//         if(!a[b]) {
//             a[b] = 0
//         } 
//         a[b]++;
//         return a;
//     }, {})
// }
// var obj = countArray(arr);
// var txt = "";
// for ( var [key , value] of Object.entries(obj) ) {
//     txt += `${key}` + " : " + `${value}` + " , ";
// }

// console.log(txt)

//
// function editArray(array) {
//     return array.reduce(function(a,b) {
//         // console.log(a,b);
//         a[b] = a[b] + 1 || 1;
//         if(a[b] > 1){
//             a[b] = "duplicated";
//         }
//         return a;
//     }, {})
// }
// var editObj = editArray(arr);
// var edit = "";
// for ( var [key , value] of Object.entries(editObj)) {
//     edit += `${key}` + " : " + `${value}` + " , ";
// }
