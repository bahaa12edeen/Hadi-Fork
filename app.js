let revernum = [];
let array = [1,2,3,4,5];

function revers(arr){
    // let e=0;
    for(let i=Math.floor((arr.length - 1)); i >= 0; i--){
        revernum.push(arr[i]);
        // arr1.push(arr[i]);
        // e++;
    }
    return revernum;
}

console.log(revers(array));
document.write(revers(array));

document.write("<hr>");

/********************************** */

let string1 = "the car drove fast";

function capitalize(str) {
    let words = str.split(" ");
    let array=[];
    for (let i = 0; i < words.length; i++) {
        array.push(words[i].charAt(0).toUpperCase()+words[i].slice(1));
    
    }
 return array.join(" ");
}

console.log(capitalize(string1));
document.write(capitalize(string1));

document.write("<hr>");

/********************************* */

let str1 = "BAB";
let str2 = "door";
let str3 = "sas";


function ifpland(string) {

    for (let i = 0; i < string.length; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log("str1: "+ifpland(str1));
console.log("str2: "+ifpland(str2));
console.log("str3: "+ifpland(str3));

console.log(ifpland(str1));
document.write(ifpland(str1));

document.write("<br>/**************************************************************/<br>");

console.log(ifpland(str2));
document.write(ifpland(str2));

document.write("<br>/**************************************************************/<br>");

console.log(ifpland(str3));
document.write(ifpland(str3));

document.write("<hr>");

arrayToSort = [2,9,0,4];

function decending(arr){
    for (let i = 0; i < arr.length; i++) 
        for (let e = i + 1; e < arr.length; e++) {  
            let third = 0; 
            if (arr[i] < arr[e]) {      
                third = arr[i];               
                arr[i] = arr[e];
                arr[e] = third;
            }
        }
        return arr;
    }


console.log(decending(arrayToSort));
document.write(decending(arrayToSort));
