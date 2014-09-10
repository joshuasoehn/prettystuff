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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-48113497-1', 'prettystuff.io');
ga('send', 'pageview');
