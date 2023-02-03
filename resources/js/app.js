setTimeout(function() {
    let preloader = document.getElementById("preloader");
    let wrapper = document.getElementById('wrapper')
    preloader.style.opacity = 0;
    setTimeout(function() {
        preloader.style.display = "none";
        wrapper.style.display = "block";
        wrapper.style.opacity = 1;
    }, 1000);
}, 3000);

console.log('My App!');