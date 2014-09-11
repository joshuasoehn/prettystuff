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

    $( '.menu-toggle' ).click(function() {
      $('.site').toggleClass( 'pull-right' );
      $('.sidebar').toggleClass( 'visible' );
      $('body').toggleClass( 'hidden' );
    });


      // Disable touch scroll when #site-nav is active
    $('body').on('touchmove', function(e) { 
    if($('.site').hasClass('pull-right')) {
      e.preventDefault();
    }
    });

});