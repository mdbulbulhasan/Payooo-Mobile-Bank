document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('mobile-number').value;
    const pin = document.getElementById('pin-number');
    console.log(accountNumber ,pin);

})