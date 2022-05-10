document.querySelector(".logIn").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const forgetPasswordPage = document.querySelector(".forgetPassword_page");
  forgetPasswordPage.classList.add("shakeY");
  setTimeout(() => {
    forgetPasswordPage.classList.add("display-none");
    loginPage.classList.add("display-block");
  }, 500);
});
