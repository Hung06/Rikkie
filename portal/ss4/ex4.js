function ex4(a){
    let count=0;
    for (let i = 0; i < Math.floor(a.length / 2) ; i++) {
        if (a[i]===a[a.length-1-i]){
            count ++;
        }
    }
    return count === Math.floor(a.length / 2);
}
console.log(ex4('racecar'));
console.log(ex4([1,2,3,2,1]));