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

//Header end