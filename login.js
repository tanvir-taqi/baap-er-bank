const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click', ()=>{
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailValue = email.value;
    const passwordValue = password.value;
    if(emailValue == "admin@admin.com" && passwordValue == "takalagbetakade"){
            window.location.href = 'bank.html';
    }else{
        alert("please enter email and password")
    }
})