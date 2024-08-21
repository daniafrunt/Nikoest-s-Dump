"use strict"

let EVERYTHING = document.querySelectorAll('body div');
let heheSound = document.querySelector('.the_hehe');
let spoofButton = document.getElementById('spoof');

spoofButton.addEventListener('click', function() {
    heheSound.play();
    setTimeout(() => {
        EVERYTHING.forEach(function(e) {
            e.remove();
        })
    }, 700);
        
})