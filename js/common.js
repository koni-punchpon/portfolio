$(function() {
  // ページ内スムーズスクロール
  $("a[href^=#]").click(function() {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  // アニメーション設定
  $(".fd-in").on("inview", function(
    event,
    isInView,
    visiblePartX,
    visiblePartY
  ) {
    if (isInView) {
      $(this)
        .stop()
        .addClass("fd-done");
    } else {
      $(this)
        .stop()
        .removeClass("fd-done");
    }
  });

  // 画面スクロール時にヘッダーにclassを付与
  $(function() {
    var $header = $("#header");
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
      }
    });
  });

  // 画面スクロール時、ページ先頭に戻るボタンにclassを付与
  $(function() {
    var $pagetop = $("#page-top");
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $pagetop.addClass("fixed");
      } else {
        $pagetop.removeClass("fixed");
      }
    });
  });

  // WORKS一覧をランダム表示
  // function shuffleContent(container) {
  //   var content = container.find("> *");
  //   var total = content.size();
  //   content.each(function() {
  //     content.eq(Math.floor(Math.random() * total)).prependTo(container);
  //   });
  // }
  // $(function() {
  //   shuffleContent($(".portfolio"));
  // });
});
