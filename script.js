const mobileMenuBtnEl = document.querySelector('.mobile-menu-btn');
const mobileMenuIconEl = document.querySelector('.mobile-menu-icon');
const navbarEl = document.querySelector('.navbar');

if(navbarEl.classList.contains('active')){
    mobileMenuIconEl.src='./assets/images/icon-menu-close.svg';
    mobileMenuIconEl.alt = 'Close menu icon';
    mobileMenuBtnEl.setAttribute('aria-expanded', 'true');
    mobileMenuBtnEl.setAttribute('aria-label', 'Close menu');
} else {
    mobileMenuBtnEl.setAttribute('aria-expanded', 'false');
    mobileMenuBtnEl.setAttribute('aria-label', 'Open menu');
    mobileMenuIconEl.src='./assets/images/icon-menu.svg';
    mobileMenuIconEl.alt = 'Open menu icon';
}

mobileMenuBtnEl.addEventListener('click', () => {
    // console.log('clicked');
    const isMobileOpen = navbarEl.classList.contains('active');

    if(isMobileOpen){
        navbarEl.classList.remove('active');
        mobileMenuBtnEl.setAttribute('aria-expanded', 'false');
        mobileMenuBtnEl.setAttribute('aria-label', 'Open menu');
        mobileMenuIconEl.src ='./assets/images/icon-menu.svg';
        navbarEl.setAttribute('aria-hidden', 'true');
    } else {
        navbarEl.classList.add('active');
        mobileMenuBtnEl.setAttribute('aria-expanded', 'true');
        mobileMenuBtnEl.setAttribute('aria-label', 'Close menu');
        mobileMenuIconEl.src='./assets/images/icon-menu-close.svg';
        navbarEl.setAttribute('aria-hidden', 'false');
    }
});
