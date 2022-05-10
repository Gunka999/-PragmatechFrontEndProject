document.querySelector(".login").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const singupPage = document.querySelector(".singup_page");
  singupPage.classList.add("shakeY");
  setTimeout(() => {
    singupPage.classList.add("display-none");
    loginPage.classList.add("display-block");
  }, 500);
});
