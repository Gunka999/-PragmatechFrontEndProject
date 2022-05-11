document.querySelector(".logIn").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const forgetPasswordPage = document.querySelector(".forgetPassword_page");
  const container = document.querySelector(".container");
  //   const singupPage = document.querySelector(".singup_page");
  forgetPasswordPage.classList.add("shakeY");
  setTimeout(() => {
    forgetPasswordPage.classList.remove("display-block");
    //  singupPage.classList.add("display-none");
    loginPage.classList.add("display-block", "shakeY");
    forgetPasswordPage.classList.remove("shakeY");
    //  container.classList.remove("height-500");
    //  container.classList.remove("height-700");
  }, 900);
  setTimeout(() => {
    loginPage.classList.remove("shakeY");
  }, 1200);
});
