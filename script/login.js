document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('mobile-number').value;
    const pin = document.getElementById('pin-number').value;
    const convertedPin = parseInt(pin);
    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href = './main.html'
        }
        else{
            alert('incorrect PIN')
        }
    }
    else{
        alert('Need a valid number');
    }
})