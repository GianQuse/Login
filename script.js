const btnStuden = document.getElementById("student"),
      btnTeacher = document.getElementById("teacher"),
      btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      btnMainTeacher = document.querySelector(".main-teacher"),
      btnMainRegister = document.querySelector(".main-register"),
      btMainLogin = document.querySelector(".main-login"),
      option = document.querySelector(".option"),
      formTeacher = document.querySelector(".teacher"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnMainTeacher.addEventListener("click", e => {
    formTeacher.classList.add("hide");
    option.classList.remove("hide");
})

btMainLogin.addEventListener("click", e =>{
    formLogin.classList.add("hide");
    option.classList.remove("hide");
})

btnMainRegister.addEventListener("click", e => {
    formRegister.classList.add("hide");
    option.classList.remove("hide");
})

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
})

btnSignUp.addEventListener("click", e => {
    formRegister.classList.remove("hide");
    formLogin.classList.add("hide");
})

btnTeacher.addEventListener("click", e => {
    option.classList.add("hide");
    formTeacher.classList.remove("hide");
})

btnStuden.addEventListener("click", e => {
    option.classList.add("hide");
    formLogin.classList.remove("hide");
})

