//supposedly something that makes header shrink on scroll

// $('.iris-left').xeyes();
// $('.iris-right').xeyes();


(function($) {
  "use strict";

  var defaultOptions = {
    padding: 0,
    reset: false,
    radius: 'natural',
    position: 'center',
    trigger: window
  };

  var positions = {
    top: 90,
    bottom: -90,
    left: 180,
    right: 0,
    topRight: 45,
    topLeft: 135,
    bottomRight: -45,
    bottomLeft: -135
  };

  function Iris($iris) {
    this.$iris = $iris;
    $iris.css('position', 'absolute');

    this.width  = $iris.outerWidth();
    this.height = $iris.outerHeight();

    this.resetOffset = function() {
      var offset = $iris.offset();
      this.offset = {
        x: offset.left + (this.width / 2) - parseInt($iris.css("left")),
        y: offset.top + (this.height / 2) - parseInt($iris.css("top"))
      };
    };
  }

  function Eye($eye, $iris) {
    this.$eye = $eye;

    $eye.css('position', 'relative');

    this.width  = $eye.width();
    this.height = $eye.height();

    this.iris   = new Iris($iris);

    this.pos = {
      x: (this.width - this.iris.width) / 2,
      y: (this.height - this.iris.height) / 2
    };

    $iris.css("left", this.pos.x + "px").css("top", this.pos.y + "px");

    this.padding = 0;
  }

  Eye.prototype.follow = function(mouse) {
    mouse.x = mouse.x - this.pos.x;
    mouse.y = mouse.y - this.pos.y;

    this.iris.resetOffset();

    var degree = Math.atan(( mouse.y - this.iris.offset.y) / ( mouse.x - this.iris.offset.x)),
    direction = (this.iris.offset.x > mouse.x) ? -1 : 1,
    newX = Math.cos(degree) * ((this.width - this.iris.width) / 2 - this.padding) * direction,
    newY = Math.sin(degree) * ((this.height - this.iris.height) / 2 - this.padding) * direction,
    radius = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)),
    distance = Math.sqrt(Math.pow(mouse.y - this.iris.offset.y, 2) + Math.pow(mouse.x - this.iris.offset.x, 2));

    if (radius > distance) {
      this.iris.$iris.css("left", ( mouse.x - this.iris.offset.x + this.pos.x) + "px").css("top", (mouse.y - this.iris.offset.y + this.pos.y) + "px");
    } else {
      this.iris.$iris.css("left", this.pos.x + newX + "px").css("top", this.pos.y + newY + "px");
    }
  };

  Eye.prototype.setPosition = function(position) {
    if (position.x !== undefined && position.y !== undefined) {
      this.iris.$iris.css("left", this.pos.x - position.x + "px").css("top", this.pos.y - position.y + "px");
    } else if (typeof position === "number") {
      var deg = position * Math.PI / -180;
      this.iris.$iris.css("left", this.pos.x + Math.cos(deg) * (this.width / 2 - this.iris.width / 2 - this.padding) + "px").css("top", this.pos.y + Math.sin(deg) * (this.height / 2 - this.iris.height / 2 - this.padding) + "px");
    } else if (position === "center") {
      this.iris.$iris.css("left", this.pos.x + "px").css("top", this.pos.y + "px");
    } else if (positions[position] !== undefined) {
      var deg2 = positions[position] * Math.PI / -180;
      this.iris.$iris.css("left", this.pos.x + Math.cos(deg2) * (this.width / 2 - this.iris.width / 2 - this.padding) + "px").css("top", this.pos.y + Math.sin(deg2) * (this.height / 2 - this.iris.height / 2 - this.padding) + "px");
    }
  };

  $.fn.xeyes = function(options) {
    options = $.extend(defaultOptions, options);
    var padding = parseInt(options.padding, 10);
    var $trigger = $(options.trigger);

    this.each(function(index, irisEl) {
      var $iris = $(irisEl),
      $eye = $iris.parent();

      var eye = new Eye($eye, $iris);
      eye.padding = padding;

      if (options.radius == 'circular' && eye.width > eye.height)
        eye.width = eye.height;
      else if (options.radius == 'circular')
        eye.height = eye.width;

      eye.setPosition(options.position);

      $trigger.mousemove(function(e) {
        eye.follow({ x: e.pageX, y: e.pageY });
      });

      if (options.reset) {
        $trigger.mouseleave(function(e) {
          eye.setPosition(options.position);
        });
      }
    });
  };
})(jQuery);

jQuery(".iris").xeyes();



//this is the countdown

//  $('#clock').countdown('2020/10/10', function(event) {   

//     var $this = $(this).html(event.strftime(''
//     '<span>%w</span> Weeks '
//     '<span>%d</span> Days '
//     '<span>%H</span> Hours '
//     '<span>%M</span> Mins '
//     '<span>%S</span> Secs'
//     ));
// });

// this is the header thing


// $(function(){
//   $('#header_nav').data('size','big');
// });

// $(window).scroll(function(){
//   if($(document).scrollTop() > 0)
// {
//     if($('#header_nav').data('size') == 'big')
//     {
//         $('#header_nav').data('size','small');
//         $('#header_nav').stop().animate({
//             height:'40px'
//         },600);
//     }
// }
// else
//   {
//     if($('#header_nav').data('size') == 'small')
//       {
//         $('#header_nav').data('size','big');
//         $('#header_nav').stop().animate({
//             height:'100px'
//         },600);
//       }  
//   }
// });



//this is the sliders

  $('.books').slick({
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
  });
