const input =document.querySelector("#input");
let output= document.querySelector("#output")

input.addEventListener('input',function(){
    let password = input.value;
    if(password.length  < 8){
        output.innerText="Password is too short";
        output.style.color='green';
    }else{
        if(password.length > 8){
        output.innerText="Password is too long";
        output.style.color='red';
    }

    else if(password.search(/[a-z/]/) == -1){
        output.innerText="Password must contain at least one lowercase letter";
        output.style.color='red';
    }else if(password.search(/[A-Z/]/) == -1){
        output.innerText="Password must contain at least one uppercase letter";
        output.style.color='red';
    }else if(password.search(/[0-9]/) == -1){
        output.innerText="Password must contain at least one number";
        output.style.color='red';
    
    }else if(password.search(/[~/!/@/#/$/%/^/&/*]/) == -1){
       output.innerText="Password must contain at least one special character";
       output.style.color='red';
    }
    else{
        output.innerText="Password is valid";
        output.style.color='green';
    }
    console.log(password)
}
})