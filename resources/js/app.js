/**-----------------------------VARIABLES--------------------------------*/

const body = document.getElementById('body');
const themeSwitch = document.querySelector('.color_switch');
const sideBar = document.getElementById('sidebar');
const desc = document.getElementById("desc");
const txt = 'Я — веб-разработчик, работаю с организациями разного масштаба.\n' +
        '                            ' +
        'Специализируюсь на создании современных веб сайтов, приложений, интернет магазинов.';



/**-----------------------------PRELOADER ANIMATION--------------------------------*/


// setTimeout(function() {
//     let preloader = document.getElementById("preloader");
//     let wrapper = document.getElementById('wrapper')
//     preloader.style.opacity = 0;
//     setTimeout(function() {
//         preloader.style.display = "none";
//         wrapper.style.display = "block";
//         wrapper.style.opacity = 1;
//     }, 1000);
// }, 3000);

/**-----------------------------WHAT'S YOU'R TIME THEME */


const whatsTime = () => {
    let dateToDay = new Date();
    let timeNow = dateToDay.getTime();
    dateToDay.setTime(timeNow);
    let theHour = dateToDay.getHours();
    console.log(theHour);
    if(theHour > 20) {
        body.classList.add('lightTheme')
    } else {
        body.classList.remove('lightTheme')
    }
}



/**--------------------------------BURGER ANIMATION-----------------------------------*/


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

addLightTheme();


/** SWIPER SLIDER INIT*/




