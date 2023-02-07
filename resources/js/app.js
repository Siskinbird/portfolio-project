
/**-----------------------------PRELOADER ANIMATION--------------------------------*/


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


/**--------------------------------BURGER ANIMATION-----------------------------------*/


const sideBar = document.getElementById('sidebar');

document.addEventListener('DOMContentLoaded', function(){
    let burger = document.querySelector('.burger');

    burger.addEventListener('mousedown', function(){

        if(burger.classList.contains('open')){
            burger.classList.remove('open');
            sideBar.style.left = -300 + 'px'
        } else {
            burger.classList.add('open');
            sideBar.style.left = 0
        }
    });
});


/**--------------------------------ANIMATE TEXT-----------------------------------*/


const desc = document.getElementById("desc"),
    txt = 'Я — веб-разработчик, работаю с организациями разного масштаба.\n' +
        '                            ' +
        'Специализируюсь на создании современных веб сайтов, приложений, интернет магазинов.';
let i = 0;

function typeWriter() {
    if (i < txt.length) {
        desc.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 5000)


/**----------------------------------CHANGE THEME-----------------------------------*/

const body = document.getElementById('body')
const themeSwitch = document.querySelector('.color_switch');

themeSwitch.addEventListener('click', () => {
    if (localStorage.getItem('theme') === 'lightTheme') {
        localStorage.removeItem('theme')
        body.classList.remove('lightTheme')
    } else {
        localStorage.setItem('theme', 'lightTheme')
        body.classList.add('lightTheme')
    }
})

/** Add theme in to local storage*/

function addLightTheme() {
    try {
        if (localStorage.getItem('theme') === 'lightTheme') {
            body.classList.add('lightTheme')
        } else {
            body.classList.remove('lightTheme')
        }
    } catch (err) {
        console.log('Something went wrong')
    }
}

addLightTheme()

