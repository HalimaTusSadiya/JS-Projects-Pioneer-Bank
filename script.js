// login Area 
const enterButton = document.getElementById('login');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const loginArea = document.getElementById('login-area')
const transactionArea = document.getElementById('transaction-area');
const loginForm = document.getElementById('loginForm');

enterButton.addEventListener('click',function(){
    if(userName.value == "" && password.value == ""){
        userName.style.borderColor='red';
        password.style.borderColor='red';
    }else if(userName.value == ""){
        userName.style.borderColor='red';
    }else if(password.value == ""){
        password.style.borderColor='red';
    }else{
        loginArea.style.display = 'none'
        transactionArea.style.display = 'block'
    }
})
loginForm.addEventListener('keydown',function(event){
    event.target.style.borderColor = 'lightblue'
    
})

//get Input Function
function getInput(id){
    let  amount = document.getElementById(id).value;  
    let amountNumber = parseFloat(amount);
    return amountNumber;
}

//Add money Function
function addMoney(id,deposit){
    let currentBalance = document.getElementById(id).innerText;
    let currentBalanceNumber = parseFloat(currentBalance)
    let totalBalance = currentBalanceNumber + deposit;
    document.getElementById(id).innerText = totalBalance;
}


// deposit Area
let balanceAmount = document.getElementById('currentBalance');
let  depositButton = document.getElementById('addDeposit');

depositButton.addEventListener('click',function(){
    addMoney("currentDeposit",getInput('depositAmount'))
    addMoney("currentBalance",getInput('depositAmount'))
    document.getElementById('depositAmount').value = "";
    
})

// Withdraw Area
const WithdrawBtn = document.getElementById('addWithdraw')
WithdrawBtn.addEventListener('click',function(){
    let balanceText = document.getElementById('currentBalance').innerText
    if(getInput('withdrawAmount') > balanceText){
        alert(`Your Account Balance is ${balanceText}`);
    }else{
        addMoney("currentWithdraw",getInput('withdrawAmount'));
        addMoney("currentBalance",-1 * getInput('withdrawAmount'));
    }
    document.getElementById('withdrawAmount').value = ""
})