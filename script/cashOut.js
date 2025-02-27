document.getElementById('withdraw-Money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amountWithdraw').value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById('pin-number').value;
    const convertedPIN = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
   
    const convertedMainBalance = parseFloat(mainBalance);
    if(amount){
        if(pin){
            if(convertedPIN === 1234){
                const sum = convertedMainBalance - convertedAmount;
                document.getElementById('main-balance').innerText = sum;
            }
            else{
                alert('Incorrect PIN');
            }
        }
        else {
            alert("Incorrect PIN");
        }
        
    }
    else {
        alert("Enter Amount");
    }
})