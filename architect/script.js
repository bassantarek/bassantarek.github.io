/* spinner loads for 4 sec then display the container */
window.onload = ()=>{
	setTimeout(() => {
		document.querySelector('body').classList.add
		('display');
	}, 4000);
};




// add change class to the hamburger menu when clicking over the sidebar ...
document.querySelector('.hamburger-menu').addEventListener('click', () => {
	document.querySelector('.container').classList.toggle('change');
});

/* Scroll Button Action */
document.querySelector('.scroll-btn').addEventListener('click', () => {
	document.querySelector('html').style.scrollBehavior = 'smooth';

	setTimeout(() => {
		document.querySelector('html').style.scrollBehavior = 'unset';
	}, 1000);
});
