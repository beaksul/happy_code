$("document").ready(function(){

  new WOW().init();

    var swiper = new Swiper(".banner", {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      $(".nav > ul > li").mouseover(function(){
        let i = $(this).index()
        $(".nav > ul > li > a").eq(i).addClass("on")
      })
      $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > a").removeClass("on")
      })
  
  var swiper = new Swiper(".best-item", {
    slidesPerView: 3,
    spaceBetween: 30,
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    breakpoints: {
      641: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      100: {
        slidesPerView: 2,
        spaceBetween: 20,
      }
    }
  });

  let sc = 0;
  $(window).scroll(function(){
    sc = $(window).scrollTop()
    console.log(sc)

    if(sc >= $(document).height()-1700){
      $(".top").fadeOut()
    }else{
      $(".top").fadeIn()
    }

    if(sc >= 900){
      $(".top").addClass("on")
      $(".nav ul li a").addClass("on")
      $(".top .top-wrap").addClass("on")
      $(".top .top-wrap > a > img").fadeOut()
      // $(".mypage-1").css("opacity", "0")
      // $(".mypage-2").css("opacity", "1")
      // $(".search-1").css("opacity", "0")
      // $(".search-2").css("opacity", "1")
      $(".search-1").attr("src", "images/jungsaemmool/search-2.png")
      $(".mypage-1").attr("src", "images/jungsaemmool/mypage-2.png")
      $(".top .top-wrap .nav > ul > li > a").css("color", "#000")
    }else{
      $(".top").removeClass("on")
      $(".nav ul li a").removeClass("on")
      $(".top .top-wrap").removeClass("on")
      $(".top .top-wrap > a > img").fadeIn()
      // $(".mypage-2").css("opacity", "0")
      // $(".mypage-1").css("opacity", "1")
      // $(".search-2").css("opacity", "0")
      // $(".search-1").css("opacity", "1")
      $(".search-1").attr("src", "images/jungsaemmool/search.png")
      $(".mypage-1").attr("src", "images/jungsaemmool/mypage.png")
      $(".top .top-wrap .nav > ul > li > a").css("color", "")
    }
  })

  $(".hamburger").click(function(){
    $(".sidemenu").css("left", "0")
  })

  $(".sidemenu > img").click(function(){
    $(".sidemenu").css("left", "")
  })

  // 마이페이지 / 서치에 마우스가 올라갔을때 현재의 이미지 주소를 가져와서 현재 활성화 되지 않은 이미지라면 활성화로 / 활성화된 이미지라면 활성화되지 않은 이미지로 체인지


  $(".mypage-1").mouseover(function(){
    if(sc >= 900)return
    if($(this).attr("src") == "images/jungsaemmool/mypage.png"){
      $(this).attr("src", "images/jungsaemmool/mypage-2.png")
    }else{
      $(this).attr("src", "images/jungsaemmool/mypage.png")
    }
  })

  $(".mypage-1").mouseout(function(){
    if(sc >= 900)return
    if($(this).attr("src") == "images/jungsaemmool/mypage.png"){
      $(this).attr("src", "images/jungsaemmool/mypage-2.png")
    }else{
      $(this).attr("src", "images/jungsaemmool/mypage.png")
    }
  })

  
  $(".search-1").mouseover(function(){
    if(sc >= 900)return
    if($(this).attr("src") == "images/jungsaemmool/search.png"){
      $(this).attr("src", "images/jungsaemmool/search-2.png")
    }else{
      $(this).attr("src", "images/jungsaemmool/search.png")
    }
  })

  $(".search-1").mouseout(function(){
    if(sc >= 900)return
    if($(this).attr("src") == "images/jungsaemmool/search.png"){
      $(this).attr("src", "images/jungsaemmool/search-2.png")
    }else{
      $(this).attr("src", "images/jungsaemmool/search.png")
    }
  })

  



})