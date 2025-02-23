const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');

        // Remove active class from all buttons and details
        resumeBtns.forEach(b => b.classList.remove('active'));
        resumeDetails.forEach(detail => detail.classList.remove('active'));

        // Add active class to clicked button and corresponding detail
        btn.classList.add('active');
        document.querySelector(`.resume-detail[data-content="${target}"]`).classList.add('active');
    });
});
