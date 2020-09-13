let menuButton = document.querySelector('.menuButton');
let mobileMenu = document.querySelector('#mobileMenu');

menuButton.addEventListener('click', () => {

        if (mobileMenu.style.display == "flex" ) {
            mobileMenu.style.display = "none" } 
        else {
            mobileMenu.style.display = "flex" ;
        }


    } );
