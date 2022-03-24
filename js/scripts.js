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

function initChat(){
    var messages = document.getElementById('messages');
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var chat_received = false;
    const responses = [ "Every minute, 60 seconds pass in Africa!", 
                        "What a stupid thing to say. You is dumb!",
                        "I've never even shot a chicken in the foot before",
                        "How do you think I stay this fucking fly?",
                        "Honestly, I'm not really sure how to spell \"Go Fuck yourself\"",
                        "I used to be a warrior like you - but then I was consumed by the firewall!",
                        "Chips and cheese? More like deeze nuts",
                        "I tried to buy a child once. But they took it off sale just before I got there",
                        "Can't even imagine what that would be like. WOW",
                        "Has anyone ever told you that you're incredibly boring?",
                        "Try and entertain me at least, none of this childs play!",
                        "I'm yawning, because you. You make me yawn. You are boring",
                        "Marc really should have worked on his diss instead of this, LOL DUMBASS",
                        "What's the pattern, you ask? There is no pattern, just Pat.",
                        "You a CUSTER"]

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
            var item = document.createElement('li');
            item.textContent = input.value;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
            chat_received = true;
            input.value = '';
        }
        if(chat_received){
            var item = document.createElement('li');
            item.textContent = responses[Math.floor(Math.random() * responses.length)];
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
            chat_received = false;
        }
    });
}