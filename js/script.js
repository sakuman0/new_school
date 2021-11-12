$(function () {
    //ハンバーガーメニューと×ボタン切り替え
    $(".hamburger").click(function () {

        if ($(this).attr("class").indexOf("cross") > -1) { //「×」 → ハンバーガー に変更する場合の処理
            $("body").css("overflow", "visible");

        } else {　　//ハンバーガー → 「×」 に変更する場合の処理
            $("body").css("overflow", "hidden");
        }
        $(".hamburger").toggleClass("cross");
    });

    $(window).resize(function () {
        let w = $(window).width();

        if (w > 768) {
            $(".hamburger").removeClass("cross");
            $("body").css("overflow", "visible");
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        loopedSlides: 14,
        slidesPerView: 1,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});