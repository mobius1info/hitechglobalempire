// =================== preloader js  ================== //
// window.addEventListener('load', function () {
//     var preloader = document.querySelector('.preloader');
//     preloader.style.transition = 'opacity .5s ease';
//     preloader.style.opacity = '0';
//     setTimeout(function () {
//         preloader.style.display = 'none';
//     }, 1500);
// });

// =================== preloader js end ================== //



// =================== light and dark start ================== //

const moon = document.getElementById('btnSwitch');
const icon = document.querySelector('#btnSwitch img');
moon.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-bs-theme');
    document.documentElement.setAttribute('data-bs-theme', theme === 'dark' ? 'light' : 'dark');
    if (theme === 'light') {
        icon.src = 'assets/images/icon/sun.svg';
        moon.style.backgroundColor = 'white';
    } else {
        icon.src = 'assets/images/icon/moon.svg';
        moon.style.backgroundColor = '#00D094';
    }

    changeImage();
});
// =================== light and dark end ================== //




// =================== Change image path start ================== //


function changeImage() {

    var theme = document.querySelector('html').getAttribute("data-bs-theme");
    if (theme === "dark") {
        var images = document.querySelectorAll('img.dark');

        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            var oldIndex = oldSrc.lastIndexOf(".");
            var baseName = oldSrc.slice(0, oldIndex);
            var extension = oldSrc.slice(oldIndex);
            var newSrc = baseName + "-dark" + extension;
            images[i].src = newSrc;
        }
    } else {
        var images = document.querySelectorAll('img.dark');

        for (var i = 0; i < images.length; i++) {
            var oldSrc = images[i].src;
            var newSrc = oldSrc.replace("-dark.", ".");
            images[i].src = newSrc;
        }
    }
}

changeImage();


// =================== Change image path end ================== //









// =================== header js start here ===================


// Add class 'menu-item-has-children' to parent li elements of '.submenu'
var submenuList = document.querySelectorAll("ul>li>.submenu");
submenuList.forEach(function (submenu) {
    var parentLi = submenu.parentElement;
    if (parentLi) {
        parentLi.classList.add("menu-item-has-children");
    }
});

// Fix dropdown menu overflow problem
var menuList = document.querySelectorAll("ul");
menuList.forEach(function (menu) {
    var parentLi = menu.parentElement;
    if (parentLi) {
        parentLi.addEventListener("mouseover", function () {
            var menuPos = menu.getBoundingClientRect();
            if (menuPos.left + menu.offsetWidth > window.innerWidth) {
                menu.style.left = -menu.offsetWidth + "px";
            }
        });
    }
});



// Toggle menu on click

var menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.stopPropagation(); // prevent the event from bubbling up to parent elements
        var element = link.parentElement;
        if (parseInt(window.innerWidth, 10) < 1200) {
            if (element.classList.contains("open")) {
                element.classList.remove("open");
                element.querySelector("ul").style.display = "none";
            } else {
                element.classList.add("open");
                element.querySelector("ul").style.display = "block";
            }
        }
    });
});




// Toggle header bar on click
var headerBar = document.querySelector(".header-bar");
headerBar.addEventListener("click", function () {
    headerBar.classList.toggle("active");
    var menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
});




//Header
var fixedTop = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        fixedTop.classList.add("header-fixed", "fadeInUp");
    } else {
        fixedTop.classList.remove("header-fixed", "fadeInUp");
    }
});


// =================== header js end here =================== //




//Animation on Scroll initializing
AOS.init();




// =================== custom trk slider js here =================== //

// component slider here
const Partner = new Swiper('.partner__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    breakpoints: {
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 25,
        },
    },
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    speed: 2000,
});



// blog  slider here
const blog = new Swiper('.blog__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: false,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    },

    autoplay: false,
    speed: 0,

});

// testimonial slider

const testimonial = new Swiper('.testimonial__slider', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});


// testimonial slider 2
const testimonial2 = new Swiper('.testimonial__slider2', {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },

    autoplay: true,
    speed: 500,

    navigation: {
        nextEl: ".testimonial__slider-next",
        prevEl: ".testimonial__slider-prev",
    },
});


// roadmap slider 
const roadmapSlider = new Swiper('.roadmap__slider', {

    grabCursor: true,
    // loop: true,
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        }

    },

    autoplay: true,
    speed: 500,

});

// =================== custom trk slider end here =================== //




// =================== scroll js start here =================== //

// Show/hide button on scroll
window.addEventListener('scroll', function () {
    var scrollToTop = document.querySelector('.scrollToTop');

    if (scrollToTop) {
        if (window.pageYOffset > 300) {
            scrollToTop.style.bottom = '7%';
            scrollToTop.style.opacity = '1';
            scrollToTop.style.transition = 'all .5s ease';
        } else {
            scrollToTop.style.bottom = '-30%';
            scrollToTop.style.opacity = '0';
            scrollToTop.style.transition = 'all .5s ease';
        }
    }
});

var scrollToTop = document.querySelector('.scrollToTop');

if (scrollToTop) {

    // Click event to scroll to top
    scrollToTop.addEventListener('click', function (e) {
        e.preventDefault();
        var scrollDuration = 100; // Set scroll duration in milliseconds
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
}

// =================== scroll js end here =================== //



// =================== count start here =================== //
new PureCounter();
// =================== count end here =================== //

// =================== form start =================== //

const contactForm = () => {
    if (!document.querySelector('.contact__form')) return

    const form = document.querySelector('form'),
        name = form.querySelector('#name'),
        email = form.querySelector('#email'),
        message = form.querySelector('#message'),
        submit = form.querySelector('button'),
        lang = document.querySelector('.form-lang').dataset.lang


    name.addEventListener('click', e => {
        name.classList.remove('form-red')
    })

    email.addEventListener('click', e => {
        email.classList.remove('form-red')
    })

    const disabledForm = () => {
        name.disabled = true
        name.classList.add('form-green')

        email.disabled = true
        email.classList.add('form-green')

        message.disabled = true
        message.classList.add('form-green')

        submit.disabled = true
        submit.classList.remove('trk-btn')
        submit.classList.add('form-bgcolor')
        submit.textContent = lang == 'en' ? 'Message Sent' : 'Nachricht Gesendet'

    }

    const sendMessage = () => {
        const data = new FormData(form)
        const url = lang == 'en' ? '../php/send.php' : '../../php/send.php'

        fetch(url, {
            body: data,
            method: 'POST',
        }).then(res => {
            if (res.ok == true) {
                disabledForm()
            }
        })
    }

    submit.addEventListener('click', e => {
        e.preventDefault()
        let errCount = 0

        if (name.value == '') {
            name.classList.add('form-red')
            errCount ++
        }

        if (email.value == '') {
            email.classList.add('form-red')
            errCount ++
        }

        if (errCount == 0) sendMessage()
    })





}

contactForm()

// =================== form end =================== //

document.querySelector('.lang-menu').addEventListener('click', e => {
    e.preventDefault()

    const subMenu = document.querySelector('.lang-sub')

    if (subMenu.style.display == 'block') {
        subMenu.style.display = 'none'
    } else {
        subMenu.style.display = 'block'
    }
})