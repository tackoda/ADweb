function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple check for demo purposes (replace with more secure methods)
    if (username === 'AlDy' && password === 'DyAl') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = '../index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}