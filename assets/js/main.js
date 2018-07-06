jQuery(document).ready(function () {
    $('.ui.dropdown').dropdown();

    $(".ui.menu .scroll").click(function(event){            
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

$(window).scroll(function(){
    let headHeight = $('header').height();
    let homeHeight = $('#home').height();
    if($(window).scrollTop() >= headHeight){
        $('header').addClass('no-shadow');
        $('header .ui.secondary.menu').addClass('animated flipInX');
    }else{
        $('header').removeClass('no-shadow');
        $('header .ui.secondary.menu').addClass('animated flipInX');
    }
});