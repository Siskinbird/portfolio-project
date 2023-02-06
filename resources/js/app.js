
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
/**--------------------------------------------------------------------------------*/



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
/**--------------------------------------------------------------------------------*/

/**----------------------------------CHANGE THEME-----------------------------------*/

const body = document.getElementById('body')
const sideBar = document.getElementById('sidebar')
const home = document.getElementById('home')
function changeTheme() {
    body.addEventListener('click', function () {
        body.classList.add('lightThemeBody')
        sideBar.classList.add('lightThemeSidebar')
        home.classList.add('lightThemeHome')
    })
}

/**--------------------------------------------------------------------------------*/
