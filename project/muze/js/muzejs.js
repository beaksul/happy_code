$("document").ready(function(){
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
        if(pos >= $(window).height()-750 ){
            $(".play, .fix-icon").fadeOut(500)
        }else{
            $(".play, .fix-icon").fadeIn(500)
        } 
        // 969
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
})