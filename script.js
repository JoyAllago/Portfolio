const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail'); // Ensure this selector matches your HTML structure
const navlink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections  = document.querySelectorAll('section');

const activePage = () => {
    const header = document.querySelector('header');
    

    sections.forEach(section => {   
        section.classList.remove('active');
    });

    navlink.forEach(link => {
        link.classList.remove('active');
    });
}

navlink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
                
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if(!navlink[0].classList.contains('active')) {
        activePage();

        navlink[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

    navlink.forEach((link, idx) => {
        link.addEventListener('click', () => {
            if (!link.classList.contains('active')) {
                activePage();

                link.classList.add('active');
            }
        });
});

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        // Remove 'active' class from all resume details
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});


const arrorwRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrorwLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * 100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active')
    });
    portfolioDetails[index].classList.add('active');
    }

arrorwRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrorwLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrorwRight.classList.add('disabled');
    }

    activePortfolio();
});

arrorwLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrorwRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrorwLeft.classList.add('disabled');
    }

    activePortfolio();
});