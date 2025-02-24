const resumeBtns = document.querySelectorAll('.skills-btn');
const resumeDetails = document.querySelectorAll('.skills-detail');
const navlink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () => {
    sections.forEach(section => section.classList.remove('active'));
    navlink.forEach(link => link.classList.remove('active'));
};

navlink.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            setTimeout(() => sections[idx].classList.add('active'), 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navlink[0].classList.contains('active')) {
        activePage();
        navlink[0].classList.add('active');
        setTimeout(() => sections[0].classList.add('active'), 1100);
    }
});

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');
    imgSlide.style.transform = `translateX(calc(${index * -100}%))`;
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    } else {
        index = 5;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 0) {
        index--;
        arrowRight.classList.remove('disabled');
    } else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});

let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = '';
    letters.forEach((letter) => {
        let span = document.createElement('span');
        span.textContent = letter;
        span.className = 'letter';
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = '1';

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(() => {
            letter.className = 'letter out';
        }, i * 80);
    });

    nextWord.style.opacity='1';
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex ===maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000)