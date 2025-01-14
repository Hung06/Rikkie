function merge3<T extends object,U extends object>(ObjA:T,ObjB:U){
    return Object.assign(ObjA,ObjB);
}
const mergedObj3=merge3<{name:string},{age:number}>({name:'John'},{age:30});