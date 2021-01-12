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


var callUser = document.getElementsByClassName('call_user');
var hideUser = document.getElementsByClassName('user_hide_wrap');
var revBox = document.getElementsByClassName('ref_box');

callUser[0].onclick = function() {
    hideUser[0].classList.toggle("user_hide_wrap_active");
}

function copyRef() {
    var copyText = document.getElementById("copy");
    copyText.select();
    copyText.value = 'Ссылка скопирована';
    document.execCommand("copy");
    revBox[0].classList.add("rev_complete");
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