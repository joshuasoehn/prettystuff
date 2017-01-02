$( document ).ready(function() {

    $('a[href^="http://"]').not('a[href*=gusdecool]').attr('target','_blank');

    $('.single-post img').each(function() {
        $(this).wrap("<a href='" + this.src + "' data-rel='lightcase' ></a>");
    });

    $('a[data-rel^=lightcase]').lightcase({transition : 'fade'});

    var url = window.location.pathname,
        urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));
        // now grab every link from the navigation
        $('.menu a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('active');
            }
        });

    $('.nav-hamburger').click(function() {
      $('.nav-hamburger').toggleClass('nav-hamburger--open');
      $('.site-nav').toggleClass('site-nav--open');
      $('html').toggleClass('hidden');
    });

    $(".post-content").fitVids();

    $('a.top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });


});
