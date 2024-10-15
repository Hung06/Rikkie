let str="hello future academy";
let str2=str.split(" ");
let str3="";
let str4="";
for(let i=0;i<str2.length;i++){
    str3=str2[i].split("");
    str3[0]=str3[0].toUpperCase();
    str4+=str3.join("")+" ";
}
console.log(str4);