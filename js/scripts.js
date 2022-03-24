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

// Tiny lil meme - 
function callAgainAndAgain() {
    let name = prompt("What's your name?");
    alert(name + " is a dumbass name, ¯\\_(ツ)_/¯ Hector Jones is way cooler!");
        window.open("https://9gag.com", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
        setTimeout(function(){
            window.open('https://hectorjones.co.uk/bomb.html', '_blank').focus();
          }, 1000);
}

function load9gag(){
    window.open("https://9gag.com", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    setTimeout(function(){
        window.open('https://hectorjones.co.uk/bomb.html', '_blank').focus();
      }, 1000);
}

// Big meme - chat bot
function initChat(){
    var messages = document.getElementById('messages');
    let child_nodes = messages.childNodes;
    //console.log(child_nodes.length);
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var chat_received = false;

    // Get the name for personalizing the chat bot
    var item = document.createElement('li');
    item.textContent = "Hi there, what's your name partner?";
    messages.appendChild(item);

    // TO DO: Get age, or other personalizing characteristics?

    // Bot responses
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
                        "You a CUSTER",
                        "yeah, hope I don't have smegma",
                        "No! No cake. ",
                        "What batman movie is this?",
                        "Grow up",
                        "I do fucking care",
                        "uh yup, please kitten",
                        "Well, just grab my ears while you fuck my butt!",
                    ]

    // Our personalizing additives
    var response_additives;
    var endings;
    var counter = 0;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Check if input there to send as chat
        if (input.value) {
            var item = document.createElement('li');
            item.textContent = input.value;

            // Get their name and save it in the var
            if(child_nodes.length == 1){
                const name = input.value;
                response_additives = [  "Well " + name + ", ", 
                                        "",
                                        "Did I ask you, " + name + "? ",
                                        "",
                                        "",
                                    ];
                endings = [ "Dude, " + name + ", you need to chill the fuck out.",
                            name + " , you know, you're not getting any younger.",
                            "Well wouldn't you like to play with my nipples huh?",
                            "I like to eat garbage honestly. I am garbage honestly.",
                            "Yeah alright, fine you got me, " + name + ". There is no BOT. Just this fine ass BOOTY!"];
            }
            console.log(child_nodes.length);
            // Post all normal chats to the wall and reset input
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);

            // Set flag
            chat_received = true;
            input.value = '';
        }

        // If we have something from the user
        if(chat_received){

            // Check first if we still have responses to process
            if(responses.length > 0){
                var item = document.createElement('li');
                var index = Math.floor(Math.random() * responses.length);

                if(typeof response_additives != "undefined"){
                    var index2 = Math.floor(Math.random() * response_additives.length);
                }

                console.log(response_additives[index2]);
                item.textContent = response_additives[index2] + responses[index];
                responses.splice(index, 1);
                messages.appendChild(item);
                window.scrollTo(0, document.body.scrollHeight);
            }

            // If not, tell Hector to fuck off <3
            // Also jokes aside, could have used a switch here awkward Marc
            else if(responses.length <= 0){
                counter = counter - 1;
                console.log(counter);
                if(counter >=-1){
                    var item = document.createElement('li');
                    item.textContent = "WHAT?";
                    messages.appendChild(item);
                }
                else if(counter >= -2){
                    var item = document.createElement('li');
                    item.textContent = "WHAT? DID YOU JUST FUCKING SAY TO ME?";
                    messages.appendChild(item);
                }
                else if(counter >= -3){
                    var item = document.createElement('li');
                    item.textContent = endings[0];
                    messages.appendChild(item);
                }
                else if(counter >= -4){
                    var item = document.createElement('li');
                    item.textContent = endings[1];
                    messages.appendChild(item);
                }
                else if(counter >= -6){
                    var item = document.createElement('li');
                    item.textContent = endings[2];
                    messages.appendChild(item);
                }
                else if(counter >= -8){
                    var item = document.createElement('li');
                    item.textContent = endings[3];
                    messages.appendChild(item);
                }
                else if(counter >= -100){
                    var item = document.createElement('li');
                    item.textContent = endings[4];
                    messages.appendChild(item);
                }
                else if(counter >= -1000){
                    var item = document.createElement('li');
                    item.textContent = "Bro if you got here, what the fuck?";
                    messages.appendChild(item);
                }
            }

            // Reset the flag
            chat_received = false;
        }
    });
}