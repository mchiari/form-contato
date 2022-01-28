var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#496474";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

password.addEventListener('focus',()=>{
    password.style.borderColor = "#496474";
});

password.addEventListener('blur',()=>{
    password.style.borderColor = "#ccc";
});

