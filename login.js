const loginBox = document.querySelector(".login");
const signupBox = document.querySelector(".signup");

window.location.href = "portfolio.html";
document.getElementById("showSignup").addEventListener("click",(e)=>{
  e.preventDefault();
  loginBox.style.display = "none";
  signupBox.style.display = "block";
});

document.getElementById("showLogin").addEventListener("click",(e)=>{
  e.preventDefault();
  signupBox.style.display = "none";
  loginBox.style.display = "block";
});

document.getElementById("loginForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  // Redirect to portfolio homepage
  window.location.href = "index.html";
});

document.getElementById("signupForm").addEventListener("submit",(e)=>{
  e.preventDefault();

  alert("Account Created Successfully!");
  signupBox.style.display = "none";
  loginBox.style.display = "block";
});