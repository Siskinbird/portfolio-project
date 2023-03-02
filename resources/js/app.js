/**================================================================================*/
/**-----------------------------GLOBAL - VARIABLES--------------------------------*/
/**================================================================================*/

const body = document.getElementById('body');
const sideBar = document.getElementById('sidebar');

/**================================================================================*/
/**-----------------------------SCROLL BEHAVIOR--------------------------------*/
/**================================================================================*/

let anchorPoints = document.querySelectorAll('.side-link, .about-info__buttons-button');
for(let anchor of anchorPoints) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockId = e.target.closest('a').getAttribute('href');
        document.querySelector(blockId).scrollIntoView({
            block: 'start',
            behavior: "smooth"
        });
    });
}
/**================================================================================*/
/**-----------------------------MENU ACTIVE LINK-----------------------------------*/
/**================================================================================*/

/** Оптимизировать под переиспользование*/
/** Получать на вход массив*/
// function activeToggle(array) {
//     for (let link of array) {
//         link.addEventListener('click', function () {
//             let current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         })
//     }
// }

const links = sideBar.getElementsByClassName('sidebar-head-links__link')
for (let link of links) {
    link.addEventListener('click', function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    })
}

/**================================================================================*/
/**-----------------------------PORTFOLIO ACTIVE LINK-----------------------------------*/
/**================================================================================*/

/**оптимизировать после создания портфолио*/
/** Откровенный костыль!!!*/
/** Получать на вход массив*/

const portfolio = document.getElementById('portfolio');
const portfolioTabs = portfolio.getElementsByClassName('pointer');

for (let tab of portfolioTabs) {
    tab.addEventListener('click', function (event) {
        for (let i of portfolioTabs) {
            if(i.classList.contains('active')) {
               i.classList.remove('active')
            }
        }
        if (!event.target.classList.contains('active')) {
            event.target.classList.add('active')
        }
    })
}

/**================================================================================*/
/**-----------------------------SCROLL ACTIVE LINK--------------------------------*/
/**================================================================================*/
// function activeRemover(array) {
//     for(let link of array) {
//         if(link.classList.contains('active')) {
//             link.classList.remove('active')
//         }
//     }
// }

/** Оптимизировать activeRemover() для переиспользования*/
/** Получать на вход массив*/
function activeRemover() {
    for(let link of links) {
        if(link.classList.contains('active')) {
            link.classList.remove('active')
        }
    }
}

function getBodyScrollTop() {
    let offset = self.pageYOffset
        || (document.documentElement
            && document.documentElement.scrollTop)
        || (document.body && document.body.scrollTop);
    /** не работает Switch case*/
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
    if (offset > 2700) {
        activeRemover()
        links[2].classList.add('active')
    }
    if (offset > 3600) {
        activeRemover()
        links[3].classList.add('active')
    }
    if (offset > 4800) {
        activeRemover()
        links[4].classList.add('active')
    }
    if (offset > 5300) {
        activeRemover()
        links[5].classList.add('active')
    }
}
window.addEventListener("scroll", getBodyScrollTop);

/**================================================================================*/
/**-----------------------------PRELOADER ANIMATION--------------------------------*/
/**================================================================================*/
/** Выключено до релиза*/
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

/**================================================================================*/
/**-----------------------------WHAT'S YOU'R TIME THEME----------------------------*/
/**================================================================================*/
/** Получает локальный таймштамп*/
/** Включает темную или светлую тему в зависимости от времени суток*/
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

/**================================================================================*/
/**--------------------------------BURGER ANIMATION--------------------------------*/
/**================================================================================*/

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

/**================================================================================*/
/**--------------------------------ANIMATE TEXT------------------------------------*/
/**================================================================================*/
let i = 0;

function typeWriter() {
    const desc = document.getElementById("desc");
    const txt = 'Я — веб-разработчик, работаю с организациями разного масштаба.\n' +
        '                            ' +
        'Специализируюсь на создании современных веб сайтов, приложений, интернет магазинов.';
    if (i < txt.length) {
        desc.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 5000)

/**================================================================================*/
/**----------------------------------CHANGE THEME----------------------------------*/
/**================================================================================*/

const themeSwitch = document.querySelector('.theme-switcher');

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




