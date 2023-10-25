let data: number| string
//with use of pipe we use more than one data type is called as union data type
function sum(a:string|number,b:string|number){
    if(typeof a ==='number' && typeof b==="number"){
        return a+b;
    }else{
        return a.toString()+b.toString()
    }
}
console.warn(sum(10,40))