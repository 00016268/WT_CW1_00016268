let search = document.querySelector('.search-box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}

//get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


//validate data

function validateForm(){

    clearMessages();

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }
}


// clear error / sucess messages 

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText="";
    }
    nameInput.classList.remove("error-border");
}



function clearMessages(){
    for (let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }

    nameInput.classList.remove("error-border")
}
