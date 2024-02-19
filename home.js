const burgerMenu = document.querySelector('.header__burger-menu');
const menuMobile =document.querySelector('.header__container-navigation');
const menuOpen = document.querySelector('.header__burger-open');
const menuClose = document.querySelector('.header__burger-close');
burgerMenu.addEventListener('click',getMenu);


function getMenu(){
	console.log('menu')
	changeIcon();
	menuMobile.classList.toggle('header__container-navigation--active-mobile');

}


function changeIcon () {
	if(menuMobile.classList.contains('header__container-navigation--active-mobile')){
		menuOpen.style.display = 'block';
		menuClose.style.display = 'none';
		document.body.style.overflow = 'visible';
		return;
	}
	menuOpen.style.display = 'none';
		menuClose.style.display = 'block';
		document.body.style.overflow = 'hidden';
}
