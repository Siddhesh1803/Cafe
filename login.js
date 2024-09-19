document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'siddhesh' && password === 'login') { //login user id and pass
        window.location.href = 'order.html';
    } 
    if (username === 'cafe' && password === 'order') { //login data and pass 
       window.location.href = 'order.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';//if pass user name is wrong
    }
});