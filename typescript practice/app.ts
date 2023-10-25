const num:number =10;
console.warn(num)

//five file one time run kar sakte hai kya?
//hum ts file ko directly run nahi kar sakte


//core type :  num,string,boolean 

let nu:number=10;
console.warn(nu)
let str:string="keshav";
let istrue:boolean=false

//if error in ts file then it will give an error on conversion to js file

function add(n1,n2){
    return n1+n2;

}
let result= add(10,20)
console.warn(result)


function dda(n1,n2){
    return n1+n2;

}
let resut= dda("10",20)
console.warn(resut)

//type inference 

let data="idea lag dena"
let g;
g=true
g=5
g="5"
//const value change nahi kar sakte

//object type

