const btnStuden = document.getElementById("student"),
      btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      btnMain = document.getElementById("main"),
      option = document.querySelector(".option"),
      formRegister = document.querySelector(".register"),
      formLogin = document.querySelector(".login");

btnMain.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.add("hide");
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

btnStuden.addEventListener("click", e => {
    option.classList.add("hide");
    formLogin.classList.remove("hide");
})

