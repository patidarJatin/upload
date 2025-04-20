let inpt = document.querySelector("#inp")
let btn = document.querySelector("button");
let img = document.querySelector("img")
btn.addEventListener('click',function(){
    let ans = inpt.value;
    if( ans === "") {
        alert("Enter Url") 
        return
    }
    else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ans}`;
        // img.alt=`${ans}`;
    }
})