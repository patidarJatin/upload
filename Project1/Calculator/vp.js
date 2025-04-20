let a = document.querySelector("#a")
let b = document.querySelector("#b")
let as = document.querySelector("#ans")
let add = document.querySelector("#add")
let res = document.querySelector("#res")

// addition
add.addEventListener("click",function(){
    let m = parseInt(a.value);
    let n =parseInt(b.value);
    let ans = m+n;
    res.innerHTML ="Result is : " + ans;

})

// subtraction
let sub = document.querySelector("#sub")
sub.addEventListener("click",function(){
    let m = parseInt(a.value);
    let n =parseInt(b.value);
    let ans = m-n;
    res.innerHTML ="Result is : " + ans;
    

})

// multiplication
let mut = document.querySelector("#mut")
mut.addEventListener("click",function(){
    let m = parseInt(a.value);
    let n =parseInt(b.value);
    let ans = m*n;
    res.innerHTML ="Result is : " + ans;

})
//divide
let divd=document.querySelector("#divd")
divd.addEventListener("click",function(){
    let m = parseInt(a.value);
    let n =parseInt(b.value);
    let ans;
    if(n === 0){
        ans=0;
    }else{
        ans = m/n;
    }
    res.innerHTML ="Result is : " + ans;

})
