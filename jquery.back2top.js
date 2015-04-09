$.fn.back2top = function(){
    var body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var backTopCss = {
        'width': '38px',
        'height': '38px',
        'border-radius': '38px',
        'line-height': '38px',
        'text-align': 'center',
        'font-size': '18px',
        'color': '#ffffff',
        'background': '#3498db',
        'position': 'fixed',
        'right': '30px',
        'bottom': '20px',
        'display': 'none',
        'opacity': '.7'
    };
    this.css(backTopCss).html('<span class="glyphicon glyphicon-chevron-up"></span>');
    this.click(function(){
        body.animate({scrollTop: 0}, 600);
    });
    var self = this;
    $(window).scroll(function () {
        var st = $(window).scrollTop();
        if(st > 50){
            self.fadeIn(300);
        }else{
            self.fadeOut(300);
        }
    });
    return this;
};
