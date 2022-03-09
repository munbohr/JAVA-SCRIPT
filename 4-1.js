const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function clickLoginBtn() {
    console.dir(loginInput);
    console.log("click!!!!");
}

loginButton.addEventListener("click", clickLoginBtn);