document.getElementById('submitButton').onclick = function() {
    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;
    console.log(password1)
    if (password1 === password2) {
        alert('Passwords match!');
    } else {
        alert('Passwords do not match!');
    }
}
