// GNB
$(function(){
    $('.gnb > li').mouseover(function(){
        $(this).find('.inner > li').stop().slideDown();
    });
    $('.gnb > li').mouseleave(function(){
        $(this).find('.inner > li').stop().slideUp();
    });
});

// SPLITTING 
$(function(){
    Splitting();
});

// SLICK JS
$(function(){
    $('.visual .slide').slick({
        arrows:true,
        dots:true,
        autoplay:true,
        fade:true,
        pauseOnHover:false,
        autoplaySpeed:3500
    });
    // PREV
    $('.slick-prev').text('prev');
    // SLIDE 2
    $('.slide2').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        fade:false,
        pauseOnHover:false,
        autoplaySpeed:5500
    });
    $('.slide2 #slick-slide-control10').text('서울 마곡 지구');
    $('.slide2 #slick-slide-control11').text('경기도 광주시');
    $('.slide2 #slick-slide-control12').text('화성 동탄 1차');
    $('.slide2 #slick-slide-control13').text('오산 세교2지구');
});
// SCROLLA ANIMATION
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    });
});


// BTN-TOP 
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 70){
            $('.btn_top').addClass('active');
        }
        else{
            $('.btn_top').removeClass('active');
        }
    });
});



































