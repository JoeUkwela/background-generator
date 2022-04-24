var css = document.querySelector("h3");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");
var body = document.getElementById("body");


const set_gradient = () =>{
    body.style.background = "linear-gradient(to right, "
    + col1.value + ", " 
    + col2.value + ")";

    css.textContent = body.style.background + ";"
}


// event -- "input"
// col1.addEventListener("input", set_gradient) // oninput= set_gradient

// col2.addEventListener("input", set_gradient) // oninput= set_gradient