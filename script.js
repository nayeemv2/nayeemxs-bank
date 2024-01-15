// login button event listener
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function (){
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = "none";

   const transactionArea = document.getElementById("transaction-area");
   transactionArea.style.display="block";
});

// deposit button event listener
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function (){
   const depositAmount = document.getElementById("depositAmount").value;
   const depositNumber = parseFloat(depositAmount);

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;
    updateSpan("currentDeposit", depositNumber);
    updateSpan("currentBalance", depositNumber);

    document.getElementById("depositAmount").value= "";
   
});
//  Withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function (){
    // withdraw input box
  const withdrawAmount = document.getElementById("withdrawAmount").value;
  const withdrawNumber = parseFloat(withdrawAmount);
  
  updateSpan("currentWithdraw",withdrawNumber);
    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const total = currentBalanceNumber - withdrawNumber;
    document.getElementById("currentBalance").innerText = total;
  document.getElementById("withdrawAmount").value = "";
});



// function for balance and deposit and withdraw
function updateSpan(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}