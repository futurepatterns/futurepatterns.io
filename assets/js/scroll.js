$(window).scroll(function() {

  // Selectors
  var $window = $(window),
      $body = $('body'),
      $section = $('section');
      $nav = $('nav');
  
  // Change 25% earlier than scroll position so color is there when you arrive
  var scroll = $window.scrollTop() + ($window.height() / 4);

  
  $section.each(function () {
    var $this = $(this);
    var $navLink = $(".nav-link");
    var $thisNavLink = $("#nav-" + $this.attr("id"));
    
    // If position is within range of this panel
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position)
    // Remember we set the scroll to 33% earlier in scroll var
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body and nav with color
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $nav.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $navLink.removeClass('active');
        
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
      $nav.addClass('color-' + $(this).data('color'));

      // Make nav link active
      $thisNavLink.addClass('active');
    }
  });    

  // Navbar background color change
  $nav.toggleClass('color-white', $window.scrollTop() > 1);
    
}).scroll();
