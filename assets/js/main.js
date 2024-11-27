window.addEventListener('DOMContentLoaded',function(e){
    const navToggle = document.querySelector(".nav-toggle");
    navToggle.onclick = function(e){
        document.body.classList.add('show-menu');
    }

    const navClose = document.querySelector(".nav-close");
    navClose.onclick = function(e){
        document.body.classList.remove('show-menu');
    }
})