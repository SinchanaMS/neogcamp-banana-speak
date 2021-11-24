
// second way of using js in html(ex02)
// console.log("script is working from a differernt file")

// prompt
// var userName = prompt("Give me yor username")

// // alert
// alert("this script works!" + userName)

var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")

var outputDiv=document.querySelector("#output")



function clickHandler() {
    outputDiv.innerText = "ajajajja" + txtInput.value
    };


btnTranslate.addEventListener("click", clickHandler)



