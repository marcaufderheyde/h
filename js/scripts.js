/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

function callAgainAndAgain() {
    let name = prompt("What's your name?");
    alert(name + " is a stupid name, lol. Hector Jones is way cooler!");
}

function reset1(){
    clearTimeout(my_time);
    for(i = 1; i < 6; i++){
        document.getElementById('i'+i).style.left= "500px";
        document.getElementById('i'+i).style.top= "100px";
    }
    document.getElementById("msg").innerHTML="";
    }
    
    function disp(){
        var step=1; // Change this step value
        //alert("Hello");
        for(i = 1; i < 6; i++){
            var y=document.getElementById('i'+i).offsetTop;
            var x=document.getElementById('i'+i).offsetLeft;
            console.log(y, x);
            document.getElementById("msg").innerHTML="X: " + x  + " Y : " + y
            if(y < 400 ){y= y +step;
            document.getElementById('i'+i).style.top= y + "px"; //vertical movment
            }
            else{
                if(x < 800) {
                    x= x +step;
                    document.getElementById('i'+i).style.left= x + "px"; //horizontal move
                }
            }
        }
    }
    
    function timer(){
    disp();
    my_time=setTimeout('timer()',10);
    }