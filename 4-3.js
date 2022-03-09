const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    //event의 어떤 기본 값이 실행되지 않도록 막는다.
    //const username = loginInput.value;
    console.log(event);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);