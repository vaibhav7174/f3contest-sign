// Get the user object from local storage
var user = JSON.parse(localStorage.getItem('user'));

if (user) {
    // Display the user details on the page
    document.getElementById('name').textContent = "Full Name : " + user.name;
    document.getElementById('email').textContent = "Email : " + user.email;
    document.getElementById('password').textContent = "Password : " + user.password;
    document.getElementById('token').textContent = "Token : " + user.token;


    if (!('token' in user) || !user.hasOwnProperty('token')) {
        // If no access token found, redirect to signup page
        window.location.href = "/index.html";
    }

    // Get the logout button element
    var logoutBtn = document.getElementById('logout');

    // Add a click event listener to the logout button
    logoutBtn.addEventListener('click', function () {
        // Remove user data from local storage
        window.location.reload();
        localStorage.removeItem('user');

        // Remove access token from local storage (if it exists)
        localStorage.removeItem('token');
        window.location.href = "/index.html";
        // Reload the page to update UI

    });

} else {
    // User data not found in local storage
    console.error("User data not found in local storage");
}


// Profile Anchor click
let profileClick = document.getElementById("profileclick");
var user = JSON.parse(localStorage.getItem('user'));

function proClick() {
    if (user.token) {
        window.location.href = "/profile.html";
    } else {
        window.location.href = "/index.html";
    }
}
function signClick() {
    if (user) {
        window.location.href = "/profile.html";
    } else {
        window.location.href = "/index.html";
    }
}
