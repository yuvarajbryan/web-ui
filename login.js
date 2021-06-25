function myFunction() {
    var user = document.getElementById("Uname").value
    var pass = document.getElementById("Pass").value
    if (user == "admin" && pass == "admin") {
        alert("Login Successful");
    }
    else {
        alert("Login Unsuccessful");
    }
}
