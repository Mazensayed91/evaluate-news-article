const axios = require("axios");
const {isValidURL} = require('../js/checkURL')

module.exports.handleOnClick = (e) => {

    // first get divs to be filled
    let text = document.getElementById("text");
    console.log("text", text);
    let agreement = document.getElementById("agreement");
    let subjectivity = document.getElementById("subjectivity");
    let confidence = document.getElementById("confidence");
    let irony = document.getElementById("irony");
    let score_tag = document.getElementById("score_tag");

    // prevent reload onSubmit
    e.preventDefault()

    let url = document.getElementById("article-url").value;
    if(isValidURL(url)){
        let loader = document.getElementById("loader");
        loader.style.display = "block"
        let response = axios.get("http://localhost:8081/sentiment_analysis/" + url)
            .then((json) => {
                loader.style.display = "none"
                let table = document.getElementById("sentiment-table");
                console.log(table);
                table.style.display = 'block';
                agreement.innerText = json.data.agreement;
                subjectivity.innerText = json.data.subjectivity;
                confidence.innerText = json.data.confidence;
                irony.innerText = json.data.irony;
                score_tag.innerText = json.data.score_tag;
            })
        console.log("response", response);
    }
    else{
        alert("Not valid url")
    }
}