var errorMsg = document.getElementById("error");
var succesMsg = document.getElementById("succes");
var email = document.getElementById('email');
var nameInput = document.getElementById('name');
var password = document.getElementById('password');
var cpassword = document.getElementById('cpassword');
var signupBtn = document.getElementById('signup-btn');

function signup(event) {
    event.preventDefault();


    if (email.value == '' || nameInput.value == '' || password.value == '' || cpassword.value == '') {
        errorMsg.textContent = "Error: All the fields are mandatory";
        errorMsg.style.color = "#ff3838";
        succesMsg.textContent = '';
    } else {
        errorMsg.textContent = "";

        // Generate access token
        var token = generateToken(16);

        // Update user object with access token
        var user = {
            name: nameInput.value,
            email: email.value,
            password: password.value,
            cpassword: cpassword.value,
            token: token // Add access token to user object
        };

        // Save user object in Local Storage
        var json = JSON.stringify(user);
        // localStorage.setItem(json);
        localStorage.setItem('user', JSON.stringify(user));
        // Show success message
        succesMsg.textContent = "Successfully Signed Up!";
        succesMsg.style.color = "#44f344";

        // Redirect to profile page and display user details
        setTimeout(function() {
            window.location.href = '/profile.html';
        }, 2000);

    }

    console.log('user added');
}

// Token Generation

function generateToken(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
signupBtn.addEventListener('click', signup)

// Profile Anchor click
let profileClick = document.getElementById("profileclick");
var user = JSON.parse(localStorage.getItem('user'));

function proClick(){
if (user.token) 
    {
        window.location.href = "/profile.html";
    }else{
        window.location.href = "/index.html";
    }
}

// profileClick.addEventListener('click', proClick)
