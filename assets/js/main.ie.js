jQuery(document).ready(function () {
    // ie browser flex delete
    var agent = navigator.userAgent.toLowerCase();
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var msver = parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    if (agent.indexOf("msie") != -1) {
        $('.container').addClass('no-flex');
        $('.menu').addClass('no-flex');
        $('.item').addClass('no-flex');
    }
});