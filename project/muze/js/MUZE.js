$("document").ready(function(){
    alert("iPhone X (375x812) 사이즈에 최적화 되어 있습니다.")
    // 햄버거박스
    $(".hamburgerbox").click(function(){
        $(".bgc").show();
        $(".hamburger-box").removeClass("on").addClass("on")
        $(".play, .fix-icon").fadeOut()
    })
    $(".close").click(function(){
        $(".hamburger-box").removeClass("on")
        $(".play, .fix-icon").fadeIn()
        $(".bgc").hide();
    })
    // 햄버거 박스

    // 검색버튼
    $(".search").click(function(){
        $(".search-box").slideDown()
        $(".play, .fix-icon").fadeOut()
    })
    $(".X").click(function(){
        $(".search-box").slideUp()
        $(".play, .fix-icon").fadeIn()
        $(".search-box .content .txt input").delay(2000).val("");
    })
    // 검색버튼

    // 배너
    const $wrap = $(".banner .banner-wrap");
    const $item = $wrap.find(".banner-item img");
    const length = $item.length - 1;

    let count = 0;

    let timer = setInterval(function(){
        count++;
        if(count > length){
            count = 0;
        }
        $wrap.stop().animate({
            left: -100 * count +"%"
        }, 1000)
    }, 4000)
    // 배너

    // 최신앨범
    var swiper = new Swiper(".new_a", {
        slidesPerView: 4,
        spaceBetween: 15,
        grabCursor: true,
        keyboard: {
        enabled: true,
        },
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        }
    });
    // 최신앨범
    // 노래추천
    $('.recommend-s').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,
        responsive: [{
        breakpoint: 1000,
        settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
        }}]
    });
    // 노래추천
    // 내아티스트
    var swiper = new Swiper(".myartist", {
        slidesPerView: 2.7,
        spaceBetween: 10,
        grabCursor: true,
        // loop:true,
        keyboard: {
        enabled: true,
        }
    });
    // 내아티스트
    //내취향저격앨범커버
    var swiper = new Swiper(".recommend", {
        effect: "flip",
        flipEffect: {
            slideShadows: false,
        },
        grabCursor: true,
        shadow: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    //내취향저격앨범커버
    // //뮤비
    var swiper = new Swiper(".mv", {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: false,
        pagination: {
        el: ".swiper-pagination",
        clickable: true
        }
    });
    //뮤비
    // top
    $(".footer .top .button").click(function(){
        $("html, body").stop().animate({
            scrollTop : 0
        }) 
    })
    // top
    // 푸터
    $(".footer .bottom ul li.more").click(function(e){
        e.preventDefault();
        $(".footer .click").toggle()
    })
    $(".footer .bottom ul li").click(function(e){
        e.preventDefault();
    })
    // 푸터

    // 스크롤
    $(window).scroll(function(){
    let pos = $(window).scrollTop(); //스크롤 위치값 확인

    if(pos >= $(window).height()-10){
        $(".play, .fix-icon").fadeOut(500)
    }else{
        $(".play, .fix-icon").fadeIn(500)
    } 
    })
    // 스크롤

    // 플레이 버튼
    $(".play-b").click(function(){
        $( ".play" ).animate( {
            left : 0
        },600);
        $(".play-b").hide()
    })

    $(".fuse").click(function(){
        $( ".play" ).animate( {
            left : "100%"
        },600);
        $(".play-b").show()
    })
    // 플레이 버튼
    // 팝업
    $(".modal .popup .x").click(function(){
        $(".modal").hide()
    })
})