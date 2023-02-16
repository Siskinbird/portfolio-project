/**-----------------------------VARIABLES--------------------------------*/

const body = document.getElementById('body');
const themeSwitch = document.querySelector('.color_switch');
const sideBar = document.getElementById('sidebar');
const desc = document.getElementById("desc");
const txt = 'Я — веб-разработчик, работаю с организациями разного масштаба.\n' +
        '                            ' +
        'Специализируюсь на создании современных веб сайтов, приложений, интернет магазинов.';

/**-----------------------------SCROLL BEHAVIOR--------------------------------*/

let anchorPoints = document.querySelectorAll('.side-link');

for (let i = 0; i < anchorPoints.length; i++) {
    anchorPoints[i].addEventListener('click', function (e) {
        e.preventDefault();

        const blockId = e.target.closest('a').getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            block: 'start',
            behavior: "smooth"
        });
    });
}
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
function activeRemover() {
    for(let link of links) {
        if(link.classList.contains('active')) {
            link.classList.remove('active')
        }
    }
}
function getBodyScrollTop() {
    let offset = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    // switch (offset) {
    //     case 0 (offset > 0):
    //         activeRemover()
    //         links[0].classList.add('active');
    //         break;
    //     case 600 (offset > 600):
    //         activeRemover()
    //         links[1].classList.add('active');
    //         break;
    //     case 3000 (offset > 3000):
    //         activeRemover()
    //         links[2].classList.add('active');
    //         break;
    //     case 4000 (offset > 4100):
    //         activeRemover()
    //         links[5].classList.add('active');
    //         break;
    // }
    if (offset > 0) {
        activeRemover()
        links[0].classList.add('active')
    }
    if (offset > 600) {
        activeRemover()
        links[1].classList.add('active')
    }
    if (offset > 3000) {
        activeRemover()
        links[2].classList.add('active')
    }
    if (offset > 3900) {
        activeRemover()
        links[3].classList.add('active')
    }
    if (offset > 4100) {
        activeRemover()
        links[5].classList.add('active')
    }
}
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




