document.querySelector(".check").addEventListener("click", function () {
  const emailValue = document.querySelector(".email").value;
  const passwordValue = document.querySelector(".password").value;
  let email = document.querySelector(".email");
  let password = document.querySelector(".password");
  let validCheck = document.querySelector(".validCheck");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailValue) {
    email.classList.add("shakeX", "empty-input");
    setTimeout(function () {
      email.classList.remove("shakeX");
    }, 500);
  } else {
    function validate() {
      if (emailValue.match(pattern)) {
        email.classList.add("valid");
        validCheck.classList.remove("zindex1");
      } else {
        email.classList.remove("valid");
        email.classList.add("shakeX");
        setTimeout(() => {
          email.classList.remove("shakeX");
        }, 500);
      }
    }
    validate();
  }

  if (!passwordValue) {
    password.classList.add("shakeX", "empty-input");
    setTimeout(function () {
      password.classList.remove("shakeX");
    }, 500);
  } else {
    password.classList.remove("empty-input");
  }
  if (emailValue.match(pattern) && passwordValue) {
    window.location.href = "http://127.0.0.1:5501/ugurlu.html";
  }
});

document
  .querySelector(".forget_password")
  .addEventListener("click", function () {
    const loginPage = document.querySelector(".login_page");
    const forgetPasswordPage = document.querySelector(".forgetPassword_page");
    const singupPage = document.querySelector(".singup_page");
    const container = document.querySelector(".container");
    loginPage.classList.add("shakeY");
    setTimeout(() => {
      loginPage.classList.remove("display-block");
      loginPage.classList.add("display-none");
      forgetPasswordPage.classList.add("display-block", "shakeY");
      loginPage.classList.remove("shakeY");
    }, 900);
    setTimeout(() => {
      forgetPasswordPage.classList.remove("shakeY");
    }, 1200);
  });

document.querySelector(".sing_up").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const singupPage = document.querySelector(".singup_page");
  const forgetPasswordPage = document.querySelector(".forgetPassword_page");
  const container = document.querySelector(".container");

  loginPage.classList.add("shakeY");
  setTimeout(() => {
    loginPage.classList.remove("display-block");
    loginPage.classList.add("display-none");
    singupPage.classList.add("display-block", "shakeY");
    loginPage.classList.remove("shakeY");
  }, 900);
  setTimeout(() => {
    singupPage.classList.remove("shakeY");
  }, 1200);
});

function changeType() {
  document.querySelector(".password").type = "text";
}
