document.getElementById("addMoney").style.display = "none";
document.getElementById("cashOut").style.display = "none";
document.getElementById("transferMoney").style.display = "none";
document.getElementById("getBonus").style.display = "none";
document.getElementById("payBill").style.display = "none";
document.getElementById("transactionHistory").style.display = "none";
// ///////////////////////
document.getElementById("addMoneyBox").addEventListener("click", function () {
  document.getElementById("addMoney").style.display = "block";
  document.getElementById("cashOut").style.display = "none";
  document.getElementById("transferMoney").style.display = "none";
  document.getElementById("getBonus").style.display = "none";
  document.getElementById("payBill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
  document.getElementById("latestPayment").style.display = "none";
});
document.getElementById("cashOutBox").addEventListener("click", function () {
  document.getElementById("cashOut").style.display = "block";
  document.getElementById("addMoney").style.display = "none";
  document.getElementById("transferMoney").style.display = "none";
  document.getElementById("getBonus").style.display = "none";
  document.getElementById("payBill").style.display = "none";
  document.getElementById("transactionHistory").style.display = "none";
  document.getElementById("latestPayment").style.display = "none";
});

document
  .getElementById("transferMoneyBox")
  .addEventListener("click", function () {
    document.getElementById("transferMoney").style.display = "block";
    document.getElementById("cashOut").style.display = "none";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("getBonus").style.display = "none";
    document.getElementById("payBill").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
    document.getElementById("latestPayment").style.display = "none";
  });
document
  .getElementById("getBonusBox")
  .addEventListener("click", function () {
    document.getElementById("getBonus").style.display = "block";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("cashOut").style.display = "none";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("payBill").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
    document.getElementById("latestPayment").style.display = "none";
  });
document
  .getElementById("payBillBox")
  .addEventListener("click", function () {
    document.getElementById("payBill").style.display = "block";
    document.getElementById("getBonus").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("cashOut").style.display = "none";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
    document.getElementById("latestPayment").style.display = "none";
    
  });
  document
  .getElementById("transactionHistoryBox")
  .addEventListener("click", function () {
    document.getElementById("transactionHistory").style.display = "block";
    document.getElementById("payBill").style.display = "none";
    document.getElementById("getBonus").style.display = "none";
    document.getElementById("transferMoney").style.display = "none";
    document.getElementById("cashOut").style.display = "none";
    document.getElementById("addMoney").style.display = "none";
    document.getElementById("latestPayment").style.display = "none";
  });
