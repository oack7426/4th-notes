// 找次小值
// const numArray = [3, 10, 6];
// let numS = numArray[0]; //最小
// let numM = numArray[1]; //次小
// for (let i = 0; i < numArray.length; i++) {
//     if (numS > numArray[i]) {
//         numM = numS;
//         numS = numArray[i];
//     } else if (numM > numArray[i]) {
//         numM = numArray[i];
//     }
// }
// console.log(numS + "/" + numM);

// 大小寫互換
// const str = "Good Event";
// let strRes = "";
// for (let i = 0; i < str.length; i++) {
//     let strASCII = str[i].charCodeAt();
//     if (strASCII >= 65 && strASCII <= 90) { //A-Z
//         strRes += String.fromCharCode(strASCII + 32);
//     } else if (strASCII >= 97 && strASCII <= 122) { //a-z
//         strRes += String.fromCharCode(strASCII - 32);
//     } else {
//         strRes += str[i];
//     }
// }
// console.log(strRes);

// 印出因數
const num = 234;
let numFactor = [];
for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
        numFactor.push(i);
    }
}
console.log(numFactor);