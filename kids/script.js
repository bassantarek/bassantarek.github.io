/* menu */
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    menu.classList.toggle('change'); /* this single line is for the menu making 'X' when clicking it by adding 'change class */
    document.querySelector('.navbar').classList.toggle('change');
});



/* card btn */
document.querySelectorAll('.card-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('change');

    });
});
