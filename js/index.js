$("document").ready(function(){


  // 모드
  $(".dark_mode").click(function(){
    $(this).hide()
    $(".light_mode").show()
    $(".section").css("background", "url(images/bg_dark.png) 80% center no-repeat")
    $(".derk_txt").css("color" , "#fff")
    $(".link_title").addClass("on")
  })

  $(".light_mode").click(function(){
    $(this).hide()
    $(".dark_mode").show()
    $(".section").css("background", "none")
    $(".derk_txt").css("color" , "#694d3a")
    $(".link_title").removeClass("on")
  })



  // 풀페이지
  let Fullpage = new fullpage(".fullpage",{
    licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
    scrollBar: true,
    scrollingSpeed: 500,
  })

  // 네비
  $(".open").click(function(){
    $("header").fadeIn()
    $(".open").hide()
    $(".close").show()
  })
  $(".close, nav ul li").click(function(){
    $("header").fadeOut()
    $(".close").hide()
    $(".open").show()
  })

  // 네비 클릭시 해당 영역으로 이동
  $("nav ul li").click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $("html, body").stop().animate({
        scrollTop : i * $(".section").height()
    })
  })


  // 어바웃 덤불 클릭시
  $("#about .top .none_click img").click(function(){
    $(".top .none_click").hide()
    $(".top .click").fadeIn()
  })
  $("#about .bottom .none_click img").click(function(){
    $(".bottom .none_click").hide()
    $(".bottom .click").fadeIn()
  })

  // 재클릭시
  $("#about .top .click_bg").click(function(){
    $(".top .click").hide()
    $(".top .none_click").fadeIn()
  })
  $("#about .bottom .click_bg").click(function(){
    $(".bottom .click").hide()
    $(".bottom .none_click").fadeIn()
  })


  // 작업물 슬라이드
  var swiper = new Swiper(".design", {
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      380: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });

  var swiper = new Swiper(".publishing", {
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      380: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });


  // 컨텍트 아이콘 클릭
  $("#contact .contact a").eq(0).click(function(){
    $("#contact .contact a").eq(0).hide()
    $("#contact .contact a").eq(1).fadeIn()
    $("#contact .contact p").eq(0).hide()
    $("#contact .contact p").eq(1).fadeIn()
    $("#contact .daramg img").eq(0).hide()
    $("#contact .daramg img").eq(1).fadeIn()
  })

}) //jqeury