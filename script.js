const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	if (username === 'admin' && password === 'admin') {
		alert('Login berhasil!');
		window.location.href = 'index9.html';
	} else {
		alert('Username atau password tidak valid!');
	}
});