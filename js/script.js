// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {

  //iOS対策
  //iOSでは疑似要素を含むaタグのリンクは２回タップしないと遷移とページ内スクロールをしないため、
  //ユーザーエージェント判定でiOSの場合はbodyタグにiosを付与し、対象の疑似要素をdisplay: noneする
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  //スライド（Swiper）内に記載のリンクを有効にするため下記の記述が必要 (;´･ω･)ｳｰﾝ･･･
  $(".works-url").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });

  $(function(){
    $('#js-page-top').hide();
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            $('#js-page-top').fadeIn(600);
        } else {
            $('#js-page-top').fadeOut(200);
        }
    });
});

  // スライド
  var mySwiper = new Swiper ('.swiper-container', {
    effect: 'fade',
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    }
  });

  // スライドイン
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
        const targetPosition = $(this).offset().top;
        if(scrollAmount > targetPosition - wHeight + 20) {
          $(this).addClass("fadeInDown");
        } else {
          $(this).removeClass("fadeInDown");
        }
    });
  });

  // ローディング画面
  window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  }
  //10秒たったら強制的にロード画面を非表示
  $(function(){
    setTimeout('stopload()',5000);
  });
    

  // ハンバーガーメニュー
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
  
});
