const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    event.preventDefault();
    //event의 어떤 기본 값이 실행되지 않도록 막는다.
    //const username = loginInput.value;
    console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);