window.onscroll = function() {
    let menu = document.getElementsByClassName('menu')[0];
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (menu.classList.contains('menu__fixed') && window.pageYOffset < 60){
        menu.classList.remove('menu__fixed')
    } else if (window.pageYOffset > 60) {
        menu.classList.add('menu__fixed')
    }
}
