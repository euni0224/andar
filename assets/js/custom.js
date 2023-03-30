$(function(){

    /**
     * 
     * 
     * 
     */

    $(window).scroll(function(){
        curr=$(this).scrollTop();
        if (curr > 0) {
            $('.header').addClass('fixed')
        } else {
            $('.header').removeClass('fixed')
        }
    })
    //강제 첫 실행
    $(window).trigger('scroll')

    $('#menuBtn').click(function(e){
        e.preventDefault();
        $('.header .menu-wrap').toggleClass('on')
        $('.header .all-wrap').slideToggle();
    })


   /**
     * 
     * 
     * 
     */

    $('.header .btn-menu').click(function(e){
        e.preventDefault();
        $('.side-nav,.dimmed').addClass('on');
        $('body').addClass('hidden')
    })
    $('.side-nav .btn-close, .dimmed').click(function(e){
        e.preventDefault();
        $('.side-nav,.dimmed').removeClass('on');
        $('body').removeClass('hidden')
    });

    
    $('.nav').click(function(e){
        e.preventDefault();

        $(this).next('.sub-list').slideToggle();
        $(this).toggleClass('on')
    });



   /**
     * search
     * 
     * 
     */

    $('.btn-search').click(function(e){
        e.preventDefault();
        $('.side-search').addClass('on');
        $('body').addClass('hidden')
        $('.up-btn').removeClass('active');
    })
    $('.side-search .btn-close').click(function(e){
        e.preventDefault();
        $('.side-search').removeClass('on');
        $('body').removeClass('hidden')
    });
    





    var swiper = new Swiper(".couponslide", {
        effect:'fade',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        }
    });

    var swiper1 = new Swiper(".slide-ad", {
        effect:'fade',
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination:{
            el:".swiper-pagination"
        }
    });
    var swiper2 = new Swiper(".sc-cate .swiper", {
        slidesPerView:2.2,
        spaceBetween: 10,
        freeMode: true,
    });

  




    // $('.btn-lnb-list').click(function(e){
    //     e.preventDefault();
    //     if ($(this).hasClass('on')) {
    //         $('.btn-lnb-list').removeClass('on')
    //         $('.inner3').stop().slideUp();
    //         $('.lnb .btn-all').css('top','-200%');
    //     } else {
    //         $(this).addClass('on')
    //         $('.inner3').stop().slideDown();
    //         $('.lnb .btn-all').css('top','10px');
    //     }
    // });


    /**
     * 
     * @curr 현재스크롤
     * @lastScroll2 마지막스크롤
     */

    let lastScroll2 = 0;
    $(window).scroll(function(){
        curr=$(this).scrollTop();
    
        if (curr < lastScroll2) {
            $('.up-btn').addClass('active');
        } else {
            $('.up-btn').removeClass('active');
        }
        
        if ($(this).scrollTop()==0) {
            $('.up-btn').removeClass('active');
        }
        lastScroll2=curr
    })


    $('.btn-top').click(function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'})
    })
            
})