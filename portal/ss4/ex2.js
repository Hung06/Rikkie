function ex2(a,b){
    let b1=b.split('');
    let count=0;
    for(let i=0;i<b1.length;i++){
        if(a.includes(b1[i])){
            count++;
            a=a.replace(b1[i], '');
        }
    }
    return count === b1.length;
}
console.log(ex2('hello world','old'));