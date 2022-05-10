document.querySelector(".check").addEventListener("click", function () {
  const emailValue = document.querySelector(".email").value;
  //   const emailType = emailValue.value.includes("@");
  //   console.log(emailType);
  const passwordValue = document.querySelector(".password").value;

  if (!emailValue) {
    //  document.querySelector(".email").className =
    //    "animate__animated animate__shakeX empty-imnput";
    // const EmailE = document.querySelector(".email");
    document.querySelector(".email").classList.add("shakeX", "empty-input");
    setTimeout(function () {
      document.querySelector(".email").classList.remove("shakeX");
    }, 500);
  } else {
    document.querySelector(".email").classList.remove("empty-input");
    //  document.querySelector(".email").classList.add("filled-input");
  }

  if (!passwordValue) {
    //  document.querySelector(".email").className =
    //    "animate__animated animate__shakeX empty-imnput";

    document.querySelector(".password").classList.add("shakeX", "empty-input");
    setTimeout(function () {
      document.querySelector(".password").classList.remove("shakeX");
    }, 500);
  } else {
    document.querySelector(".password").classList.remove("empty-input");
    //  document.querySelector(".email").classList.add("filled-input");
  }

  if (emailValue && passwordValue) {
    window.location.href = "http://127.0.0.1:5501/ugurlu.html";
  }
});

document
  .querySelector(".forget_password")
  .addEventListener("click", function () {
    const loginPage = document.querySelector(".login_page");
    const forgetPasswordPage = document.querySelector(".forgetPassword_page");
    loginPage.classList.add("shakeY");
    setTimeout(() => {
      loginPage.classList.add("display-none");
      forgetPasswordPage.classList.add("display-block");
    }, 500);
  });

document.querySelector(".sing_up").addEventListener("click", function () {
  const loginPage = document.querySelector(".login_page");
  const singupPage = document.querySelector(".singup_page");

  loginPage.classList.add("shakeY");
  setTimeout(() => {
    loginPage.classList.add("display-none");
    singupPage.classList.add("display-block");
  }, 500);
});
