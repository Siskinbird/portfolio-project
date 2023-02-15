/**-----------------------------VARIABLES--------------------------------*/

const body = document.getElementById('body');
const themeSwitch = document.querySelector('.color_switch');
const sideBar = document.getElementById('sidebar');
const desc = document.getElementById("desc");
const txt = 'Я — веб-разработчик, работаю с организациями разного масштаба.\n' +
        '                            ' +
        'Специализируюсь на создании современных веб сайтов, приложений, интернет магазинов.';

/**-----------------------------MENU ACTIVE LINK--------------------------------*/

const links = sideBar.getElementsByClassName('sidebar-head-links__link')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}
/**-----------------------------SCROLL ACTIVE LINK--------------------------------*/
function getBodyScrollTop() {
    let offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    if (offset > 500) {
        links[0].classList.remove('active')
        links[1].classList.add('active')
        //document.querySelector('#navbar').className = "absolute-menu";
        console.log(offset);
    }
    if (offset > 1000) {
        links[1].classList.remove('active')
        links[2].classList.add('active')
        //document.querySelector('#navbar').className = "absolute-menu";
        console.log(offset);
    }
    if (offset > 1800) {
        links[2].classList.remove('active')
        links[3].classList.add('active')
        //document.querySelector('#navbar').className = "absolute-menu";
        console.log(offset);
    }
    if (offset > screen.height - 300) {
        //document.querySelector('#navbar').className = "fixed-menu-top";
        console.log(offset)
    }
}
// let scrollPosition = body.scrollTop
// console.log(scrollPosition);
window.addEventListener("scroll", getBodyScrollTop);
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




