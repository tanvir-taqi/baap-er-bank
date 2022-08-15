const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

const depositInput = document.getElementById('deposit-value');
const withdrawInput = document.getElementById('withdraw-value');

const totalAmount = document.getElementById('total-amount');
const depositAmount = document.getElementById('deposited-amount');
const withdrawAmount = document.getElementById('withdraw-amount');

depositBtn.addEventListener('click', function () {
        const deposit = parseInt(depositInput.value);
        const depositMoney = parseInt(depositAmount.innerText);
         
        depositAmount.innerText =  depositMoney + deposit;
        totalAmount.innerText = parseInt(totalAmount.innerText) + deposit;
        depositInput.value = '';
        
    })

withdrawBtn.addEventListener('click', function (){
   const withdraw = parseInt(withdrawInput.value);
   const withdrawMoney = parseInt(withdrawAmount.innerText);
  
   withdrawAmount.innerText = withdrawMoney + withdraw ;
   totalAmount.innerText = parseInt(totalAmount.innerText) - withdraw;
   withdrawInput.value = '';
})

