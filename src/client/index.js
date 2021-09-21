
const {handleOnClick} = require('./js/eventsHelper')

// get the button for submit
document.addEventListener("DOMContentLoaded", () => {
    console.log("s" ,document.querySelector(".btn-submit"));

    document.querySelector(".btn-submit").addEventListener("click", handleOnClick)
})
