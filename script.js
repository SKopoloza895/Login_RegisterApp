let users = [
	{username: "siya", password:"password12"},
	{username: "thabz", password:"password123"}
]

function login() {
	let username = document.getElementById('username').value
	let password = document.getElementById('password').value

	for (i = 0; i < users.length; i++) {
		if (username == users[i].username && password == users[i].password) {
			console.log(username + "login successfull!!")
			return
		}
		
	}

	console.log("incorrect username or password")
}





// for active then change the click login and register 
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.main_wrapper');

signUpBtnLink.addEventListener('click',() =>{
	wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click',() =>{
	wrapper.classList.toggle('active');
});


function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}