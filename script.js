// Example: A simple function to redirect users
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        window.location.href = this.getAttribute('onclick').replace("window.location.href='", "").replace("'", "");
    });
});
