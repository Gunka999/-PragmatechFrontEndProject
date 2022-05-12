document.querySelector(".logIn").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const forgetPasswordPage = document.querySelector(".forgetPassword_page");
  const container = document.querySelector(".container");
  forgetPasswordPage.classList.add("shakeY");
  setTimeout(() => {
    forgetPasswordPage.classList.remove("display-block");
    loginPage.classList.add("display-block", "shakeY");
    forgetPasswordPage.classList.remove("shakeY");
  }, 900);
  setTimeout(() => {
    loginPage.classList.remove("shakeY");
  }, 1200);
});
