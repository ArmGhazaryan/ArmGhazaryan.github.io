'use strict'

$(function(){




	
$('ul').on("click", "img", function() {
         var imageURL = $(this).attr('src');
         var effect = $('#imgEffect').val();
         var duration = $('#imgDuration').val() * 1000;
 
         if (effect == "Fade") {
             $('#mainImg').fadeOut(duration, function() {
                 $(this).attr('src', imageURL);
             }).fadeIn(duration);
         } else {
             $('#mainImg').slideUp(duration, function() {
                 $(this).attr('src', imageURL);
             }).slideDown(duration);
         }
     });
 
 
     var mainImg = $("#mainImg");
     $("#btn1").click(function() {
         mainImg.animate({ width: "+=100px", height: "+=100px" }, 500);
     });
 
     $("#btn2").click(function() {
         mainImg.animate({ width: "-=100px", height: "-=100px" }, 500);
     });











})