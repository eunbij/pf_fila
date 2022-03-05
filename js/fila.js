$(function(){
    $('.slider').bxSlider({
        mode: 'horizontal',
        speed: 500,
        pause: 3000,
        pager: true,
        sideWidth: 1920,
        auto: true,
        autoHover: true
    });
  
    $('.top_sub p').eq(2).on('click',function(){
        $('aside').stop().slideUp();
    });

    $('.ham #menuicon').on('click',function(){
        $('.hamgnb').slideToggle();
    });

    $('.gnb li').mouseenter(function(){
        $(this).children('ul').stop().slideDown();
    });
    $('.gnb li').mouseleave(function(){
        $(this).find('ul:visible').stop().slideUp();
    });


    var addBtn01 = $('<a href="#" class="more_btn_01">자세히보기</a>');
    // $(addBtn01).insertAfter($('.slider .sliderimg01'));
    $('.slider .sliderimg01').after(addBtn01);
    var addBtn02 = $('<a href="#" class="more_btn_02">자세히보기</a>');
    // $(addBtn02).insertAfter($('.slider .sliderimg02'));
    $('.slider .sliderimg02').after(addBtn02);


    $('.local .lnb li a, .global h2 a, .gnb a, .md_pick_area a, .fila_sns a, .footer_gnb a').click(function(e){
        e.preventDefault();
    });
});
