let users = [
	{username: "siya", password:"password12"},
	{username: "thabz", password:"password123"}
]

// localStorage.setItem("users", JSON.stringify([]));

// let users = JSON.parse(localStorage.setItem("users")) || [];




// function login
function login() {
	// data input from the form 
	let username = document.getElementById("username").value
	let password = document.getElementById("password").value

	// retrieve users array from local storage
	let users = JSON.parse(localStorage.getItem("users")) || [];

	// for loop users objects then confirm if username and password 
	for ( let i = 0; i < users.length; i++) {
		if (username == users[i].username && password == users[i].password) {
			alert(username + " login successfull!! ")
			return
		}
		
	}
// error if username and password dont match
	alert("incorrect username or password")
}

function registerUsers() {
	let registerUsername = document.getElementById("newUsername").value
	let registerEmail = document.getElementById("email").value
	let registerPassword = document.getElementById("newPassword").value
	let newUsername = {
		username: registerUsername,
		email: registerEmail,
		password: registerPassword

	}

	// check for existing username or short password
	for (let i = 0; i < users.length; i++) {
		if (registerUsername == users[i].username) {
			alert("username is already taken")
			return
		}
		else if(registerPassword.length < 8){
			alert("password is too short plus 8 or more chars")
			return
		}
		
	}
	users.push(newUsername)
	console.log(users)
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


