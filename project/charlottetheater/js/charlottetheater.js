$("document").ready(function(){
    
    new WOW().init();

    
    const $arrow_a = $(".musical .arrow-a a")
    const $arrow_b = $(".musical .arrow-b a")
    
    let position = parseInt($(".quickmenu").css("top"));//스크롤메뉴탑값
    $(window).scroll(function(){
        let pos = $(window).scrollTop(); //스크롤위치값
        if(pos >= 150){
            $(".top .nav").addClass("on")
        }else{
            $(".top .nav").removeClass("on")
        }//네비고정
        const current = (pos / ($(document).outerHeight() - $(window).height())) * 100;
        $(".bar").width(current+"%")
        //스크롤시상단바
        let new_pos = position + pos;
        $(".quickmenu").stop().animate({
            top: 0//new_pos + "px"
        })//스크롤메뉴위치속성
        if(pos >= 600){
            $(".quickmenu").show();
        }else{
            $(".quickmenu").hide();
        }//스크롤메뉴표시속성
        if(pos >= 2900){
            $(".quickmenu ul li").removeClass("on").eq(3).addClass("on")
        }else if(pos >= 1900){
            $(".quickmenu ul li").removeClass("on").eq(2).addClass("on")
        }else if(pos >= 1250){
            $(".quickmenu ul li").removeClass("on").eq(1).addClass("on")
        }else if(pos >= 600){
            $(".quickmenu ul li").removeClass("on").eq(0).addClass("on")
        }
    })//스크롤
    // 퀵메뉴 li 클릭
    $(".quickmenu ul li a").eq(0).click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : 720
        })
    })
    $(".quickmenu ul li a").eq(1).click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : 1500
        })
    })
    $(".quickmenu ul li a").eq(2).click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : 2300
        })
    })
    $(".quickmenu ul li a").eq(3).click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : 3800
        })
    })
    $(".quickmenu ul li a").eq(4).click(function(e){
        e.preventDefault();
        let i = $(this).index();
        $("html, body").stop().animate({
            scrollTop : 0
        }, 900)
    })// 퀵메뉴 li 클릭

    // 뮤지컬 박스 arrow 클릭
    $arrow_a.click(function(e){
        let a = $(this).index();
        e.preventDefault();

        if(a == 0){
            //왼쪽
            $(".musical:nth-of-type(1) .poster-box ul li").stop().animate({
                left: "0%"
            })
        }else{
            //오른쪽
            $(".musical:nth-of-type(1) .poster-box ul li").stop().animate({
                left: "-50%"
            })
        }
    })
    $arrow_b.click(function(e){
        let b = $(this).index();
        e.preventDefault();

        if(b == 0){
            //왼쪽
            $(".musical:nth-of-type(2) .poster-box ul li").stop().animate({
                left: "0%"
            })
        }else{
            //오른쪽
            $(".musical:nth-of-type(2) .poster-box ul li").stop().animate({
                left: "-50%"
            })
        }
    })
    // 뮤지컬 박스 arrow 클릭
    
    //배너
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay:{delay:4000},
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".swiper-button-next").mouseout(function(){
        swiper.autoplay.start()
    })
    $(".swiper-button-prev").mouseout(function(){
        swiper.autoplay.start()
    })
    $(".swiper-pagination").mouseout(function(){
        swiper.autoplay.start()
    })
    //배너

    //에티켓 버튼
    const $e_button = $(".etiquette .e-button img")
    const $e_button_on = $(".etiquette .e-button a img")

    //모달창

    let pos = 0;
    let pos2 = 0;

    $(window).scroll(function(){
        pos = $(window).scrollTop();
    })



    $(".etiquette .e-button").click(function(e){
        e.preventDefault()
        $(".modal").fadeIn()
        $(".modal-item iframe").fadeIn()


        $("html, body").css("overflow", "hidden");
        $(window).scrollTop(pos)
        pos2 = pos

    })


    $(".modal").click(function(){
        $(".modal").hide()
        $(".modal-item iframe").hide()
        
        $(window).scrollTop(pos);
        $("html, body").css("overflow", "visible");

        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
    })
})