//Header script
var callLang = document.getElementsByClassName('top_panel_lang');
var hideLang = document.getElementsByClassName('lang_hide');

callLang[0].onclick = function() {
    hideLang[0].classList.toggle("lang_hide_active");
}

var callVoice = document.getElementsByClassName('top_panel_notification');
var callText = document.getElementsByClassName('notification_text');

callVoice[0].onclick = function() {
    if (callText[0].innerHTML === "Выкл") {
        callText[0].innerHTML = "Вкл";
    } else {
        callText[0].innerHTML = "Выкл";
    }
}

var callMes = document.getElementsByClassName('message_img');
var hideMes = document.getElementsByClassName('message_hide');

callMes[0].onclick = function() {
    hideMes[0].classList.toggle("message_hide_active");
}

$(".call_menu").on("click", function(e) {
    e.preventDefault();
    $(this).siblings('ul').slideToggle();
});

$(".header_btn_img").on("click", function() {
    $(".header_nav").addClass("header_nav_active");
});

$(".header_nav_close").on("click", function() {
    $(".header_nav").removeClass("header_nav_active");
});

//Header end