const {isValidURL} = require('../client/js/checkURL')


// get the button for submit
document.querySelector(".btn-submit").addEventListener("click",
    () => {
        let url = document.getElementById("article-url").value;
        if(isValidURL(url)){
            alert("Gamed gede")
        }
        else{
            alert("Not valid url")
        }
    });