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
console.log("str3: "+ifpland(str3));//trtytr
//anas assetment