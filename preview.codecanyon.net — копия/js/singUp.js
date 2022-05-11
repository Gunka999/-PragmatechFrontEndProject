document.querySelector(".login").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const singupPage = document.querySelector(".singup_page");
  const container = document.querySelector(".container");
  //   const forgetPasswordPage = document.querySelector(".forgetPassword_page");
  singupPage.classList.add("shakeY");
  setTimeout(() => {
    singupPage.classList.remove("display-block");
    //  forgetPasswordPage.classList.add("display-none");
    loginPage.classList.add("display-block", "shakeY");
    singupPage.classList.remove("shakeY");
    //  container.classList.remove("height-500");
    //  container.classList.remove("height-700");
  }, 900);
  setTimeout(() => {
    loginPage.classList.remove("shakeY");
  }, 1200);
});
