function onScroll(t){var s=$(document).scrollTop();$(".navigation a").each(function(){var t=$(this),i=$(t.attr("href"));i.position().top<=s&&i.position().top+i.height()>s?($(".navigation a").removeClass("active"),t.addClass("active")):t.removeClass("active")})}function slide(t){t.preventDefault(),$("#adam-bio").slideToggle(500)}function slide2(t){t.preventDefault(),$("#scott-bio").slideToggle(500)}$(document).ready(function(){$(document).on("scroll",onScroll),$('a[href^="#"]').on("click",function(t){t.preventDefault(),$(document).off("scroll"),$("a").each(function(){$(this).removeClass("active")}),$(this).addClass("active");var s=this.hash;$target=$(s),$("html, body").stop().animate({scrollTop:$target.offset().top+2},500,"swing",function(){window.location.hash=s,$(document).on("scroll",onScroll)})})}),$("#adam").on("click",slide),$("#scott").on("click",slide2),$("#clock").countdown("2015/11/08 13:00:00",function(t){var s=$(this).html(t.strftime('<span class="c-d-one">The next meeting is in: <br></span><span class="c-d-number">%D</span> <span class="c-d-days">Days</span> <br><span>%H</span> Hours <span>%M</span> Minutes <span>%S</span> Seconds <br>On November 08, 2015'))}),$("form").on("submit",function(){event.preventDefault();var t=$(event.currentTarget);console.log($("#name-box").val()),console.log($("#quote-box").val()),console.log($("#page-box").val());var s=$("#name-box").val(),i=$("#quote-box").val(),o=$("#page-box").val();if(""!=s){var e="https://docs.google.com/forms/d/1HIRTXsW4LNiugKHa-mElkbMht8uaQaq5o9haCex8kEM/formResponse",a=t.serialize();$.post(e,t.serialize(),function(){}).always(function(){console.warn("Data sent to Google.")})}else alert("please fill entire form");$("form").each(function(){this.reset()})}),function($){"use strict";function t(t){this.$iris=t,t.css("position","absolute"),this.width=t.outerWidth(),this.height=t.outerHeight(),this.resetOffset=function(){var s=t.offset();this.offset={x:s.left+this.width/2-parseInt(t.css("left")),y:s.top+this.height/2-parseInt(t.css("top"))}}}function s(s,i){this.$eye=s,s.css("position","relative"),this.width=s.width(),this.height=s.height(),this.iris=new t(i),this.pos={x:(this.width-this.iris.width)/2,y:(this.height-this.iris.height)/2},i.css("left",this.pos.x+"px").css("top",this.pos.y+"px"),this.padding=0}var i={padding:0,reset:!1,radius:"natural",position:"center",trigger:window},o={top:90,bottom:-90,left:180,right:0,topRight:45,topLeft:135,bottomRight:-45,bottomLeft:-135};s.prototype.follow=function(t){t.x=t.x-this.pos.x,t.y=t.y-this.pos.y,this.iris.resetOffset();var s=Math.atan((t.y-this.iris.offset.y)/(t.x-this.iris.offset.x)),i=this.iris.offset.x>t.x?-1:1,o=Math.cos(s)*((this.width-this.iris.width)/2-this.padding)*i,e=Math.sin(s)*((this.height-this.iris.height)/2-this.padding)*i,a=Math.sqrt(Math.pow(o,2)+Math.pow(e,2)),n=Math.sqrt(Math.pow(t.y-this.iris.offset.y,2)+Math.pow(t.x-this.iris.offset.x,2));a>n?this.iris.$iris.css("left",t.x-this.iris.offset.x+this.pos.x+"px").css("top",t.y-this.iris.offset.y+this.pos.y+"px"):this.iris.$iris.css("left",this.pos.x+o+"px").css("top",this.pos.y+e+"px")},s.prototype.setPosition=function(t){if(void 0!==t.x&&void 0!==t.y)this.iris.$iris.css("left",this.pos.x-t.x+"px").css("top",this.pos.y-t.y+"px");else if("number"==typeof t){var s=t*Math.PI/-180;this.iris.$iris.css("left",this.pos.x+Math.cos(s)*(this.width/2-this.iris.width/2-this.padding)+"px").css("top",this.pos.y+Math.sin(s)*(this.height/2-this.iris.height/2-this.padding)+"px")}else if("center"===t)this.iris.$iris.css("left",this.pos.x+"px").css("top",this.pos.y+"px");else if(void 0!==o[t]){var i=o[t]*Math.PI/-180;this.iris.$iris.css("left",this.pos.x+Math.cos(i)*(this.width/2-this.iris.width/2-this.padding)+"px").css("top",this.pos.y+Math.sin(i)*(this.height/2-this.iris.height/2-this.padding)+"px")}},$.fn.xeyes=function(t){t=$.extend(i,t);var o=parseInt(t.padding,10),e=$(t.trigger);this.each(function(i,a){var n=$(a),r=n.parent(),h=new s(r,n);h.padding=o,"circular"==t.radius&&h.width>h.height?h.width=h.height:"circular"==t.radius&&(h.height=h.width),h.setPosition(t.position),e.mousemove(function(t){h.follow({x:t.pageX,y:t.pageY})}),t.reset&&e.mouseleave(function(s){h.setPosition(t.position)})})}}(jQuery),jQuery(".iris").xeyes(),$(".books").slick({prevArrow:$(".prev"),nextArrow:$(".next")}),$(function(){$("header").data("size","big")}),$(window).scroll(function(){$(document).scrollTop()>0?"big"==$("header").data("size")&&($("header").data("size","small"),$("header").stop().animate({height:"180px"},200),$(".logo").css({transform:"scale(0.6,0.6)","transform-origin":"top left"}),$("#clock").css({transform:"scale(0.6,0.6)","transform-origin":"top right"}),$(".marquee").css("display","none"),$(".navigation").css({transform:"scale(0.6,0.6)","transform-origin":"top left"})):"small"==$("header").data("size")&&($("header").data("size","big"),$("header").stop().animate({height:"380px"},200),$(".logo").css({transform:"scale(1,1)","transform-origin":"top left"}),$("#clock").css({transform:"scale(1,1)","transform-origin":"top right"}),$(".marquee").css({display:"inline","padding-top":"20px"}),$(".navigation").css({transform:"scale(1,1)","transform-origin":"top left"}))}),$(".swag-img").jrumble({x:10,y:10,rotation:4}),$(".swag-img").trigger("startRumble"),$(".swag-img").hover(function(){$(this).trigger("startRumble")},function(){$(this).trigger("stopRumble")});