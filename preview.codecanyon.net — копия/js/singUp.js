document.querySelector(".login").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const singupPage = document.querySelector(".singup_page");
  const container = document.querySelector(".container");
  singupPage.classList.add("shakeY");
  setTimeout(() => {
    singupPage.classList.remove("display-block");
    loginPage.classList.add("display-block", "shakeY");
    singupPage.classList.remove("shakeY");
  }, 900);
  setTimeout(() => {
    loginPage.classList.remove("shakeY");
  }, 1200);
});
