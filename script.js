// Function to create a project element
// function createProjectElement(title, description) {
//     const projectElement = document.createElement('div');
//     projectElement.classList.add('project');

// const { url } = require("inspector");

// const { url } = require("inspector");

//     const titleElement = document.createElement('h3');
//     titleElement.textContent = title;

//     const descriptionElement = document.createElement('p');
//     descriptionElement.textContent = description;

//     projectElement.appendChild(titleElement);
//     projectElement.appendChild(descriptionElement);

//     return projectElement;
// }

// Function to add a project to the project list
// function addProject(title, description) {
//     const projectList = document.getElementById('project-list');
//     const projectElement = createProjectElement(title, description);
//     projectList.appendChild(projectElement);
// }

// Example: Add a project dynamically
// addProject('Sample Project', 'This is a sample project description.');

function openNav() {
    document.querySelector(".sidenav").style.width = "250px";
    document.querySelector(".main-content").style.marginLeft = "250px";
}

function closeNav() {
    document.querySelector(".sidenav").style.width = "0";
    document.querySelector(".main-content").style.marginLeft = "0";
}


function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // const themeStyle = document.getElementById('theme-style');
    // const isDarkMode = body.classList.contains('dark-mode');

    // Switch between dark and light mode stylesheets
    // themeStyle.href = isDarkMode ? 'dark-style.css' : 'light-style.css';
    
    // Save theme preference to localStorage (optional)
    // localStorage.setItem('darkMode', isDarkMode);
}

// Check the user's theme preference from localStorage (optional)
// const storedDarkMode = localStorage.getItem('darkMode');
// if (storedDarkMode === 'true') {
//     toggleTheme(); // Apply dark mode if the user's preference is set
// }

// function contact() {
//     let con = confirm("Lanjut?");

//     if(con == true){
//         href = document.url('https://wa.me/+6285156346349/');
//         document/
//         document.href(href);
//     } else {
//         alert("Ok")
//     }
// }

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");

//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollToTopBtn.style.display = "block";
//     } else {
//         scrollToTopBtn.style.display = "none";
//     }
// }

// function scrollToTop() {
//     var scrollToTopBtn = document.getElementById("scrollToTopBtn");
//     var scrollStep = -window.scrollY / (500 / 15); // Adjust the values for speed

//     function animateScroll() {
//         window.scrollBy(0, scrollStep);

//         if (window.scrollY <= 0) {
//             scrollToTopBtn.style.display = "none";
//             return;
//         }

//         requestAnimationFrame(animateScroll);
//     }

//     animateScroll();
// }

// Show Loading
function showLoading() {
    document.getElementById("loadingContainer").style.display = "flex";
}

// Hide Loading
function hideLoading() {
    document.getElementById("loadingContainer").style.display = "none";
}

// Simulate a time-consuming action (replace this with your actual code)
function simulateTimeConsumingAction() {
    showLoading();
    setTimeout(() => {
        // Simulating a delay of 3 seconds
        hideLoading();
    }, 3000);
}

// Contoh penggunaan:
// Panggil showLoading() sebelum memuat data atau tindakan yang memakan waktu.
// Panggil hideLoading() setelah data atau tindakan selesai dimuat.


window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var scrollToTopContainer = document.getElementById("scrollToTopContainer");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopContainer.style.display = "block";
    } else {
        scrollToTopContainer.style.display = "none";
    }
}

function scrollToTop() {
    var scrollStep = -window.scrollY / (200 / 10);

    function animateScroll() {
        window.scrollBy(0, scrollStep);

        if (window.scrollY <= 0) {
            scrollToTopContainer.style.display = "none";
            window.onscroll = function () {
                scrollFunction();
            };
            return;
        }

        requestAnimationFrame(animateScroll);
    }

    animateScroll();
}

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#About"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'end'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#Porch"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'end'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#Portfolio"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#Support"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#Contact"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                });
            }
        });
    });
});

// Tambahkan class 'dark-mode-scrolled' ke body saat beberapa piksel digulir
// window.addEventListener('scroll', function () {
//     const scrolled = window.scrollY > 3180 && window.scrollY < 3350;
//     document.body.classList.toggle('dark-mode-scrolled', scrolled);
// });