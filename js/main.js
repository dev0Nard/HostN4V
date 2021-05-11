const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    $('this').toggleClass('open');
    $('.navigation-bar').slideToggle('200');
}

