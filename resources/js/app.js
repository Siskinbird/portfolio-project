setTimeout(function() {
    let preloader = document.getElementById("preloader");
    preloader.style.opacity = 0;
    setTimeout(function() {
        preloader.style.display = "none";
    }, 1000);
}, 5000);

console.log('My App!');