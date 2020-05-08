/*(function(){
    // Back to Top - by CodyHouse.co
    var backTop = document.getElementsByClassName('js-cd-top')[0],
        offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
        offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        scrollDuration = 700,
        scrolling = false;

    if( backTop ) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function(event) {
            if( !scrolling ) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });

        //smooth scroll to top
        backTop.addEventListener('click', function(event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        ( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
        ( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }
})();*/
(function(){
    //về đầu trang
    var backTop =document.getElementsByClassName("js-cs-top")[0],
        offset = 300, //cuộn cửa sổ trình duyệt (tính bằng pixel) sau đó liên kết "quay lại đầu trang" được hiển thị
        offsetOpacity =1200, // cuộn cửa sổ trình duyệt (tính bằng pixel) sau đó giảm độ mờ của liên kêt "trở lại trang đầu"
        scrollDuration = 700,
        scrolling =false;
    if(backTop){
        //cập nhập trở lại tầm nhìn hàng đầu khi cuộn
        window.addEventListener("scroll", function(event){
            if(!scrolling){
                scrolling =true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });
        //di chuyển trơn chu lên trên trang đầu
        backTop.addEventListener("click", function(event){
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTop(0, 0) : Util.scrollTop(0, scrollDuration);
        });
    }
    function checkBackToTop(){
        var windowTop =window.scrollY || document.documentElement.scrollTop;
        (windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--false-out');
        (windowTop > offsetOpacity) && Util.addClass(backTop, 'cd-top--false-out');
        scrolling =false;
    }

})