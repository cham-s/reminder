// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .


/**
* Javascript made by Chams for practice project
* June 2015
**/

// show the image to the right
var moveImageRight = function() {
  var currentThumb = $('.thumbnail-selected');
    var currentThumb = $('.thumbnail-selected');
    var nextThumb = currentThumb.next();

    var currentPrev = $('.active-preview');
    var nextPrev = currentPrev.next();


    if (nextThumb.length == 0) {
      nextThumb = $('.thumb-prev').first();
      nextPrev = $('.preview-item').first();
    }

    currentThumb.removeClass('thumbnail-selected');
    nextThumb.addClass('thumbnail-selected');
    currentPrev.removeClass('active-preview');
    nextPrev.addClass('active-preview');
};

var moveImageLeft = function() {
  var currentThumb = $('.thumbnail-selected');
    var prevThumb = currentThumb.prev();

    var currentPrev = $('.active-preview');
    var prevPrev = currentPrev.prev();


    if (prevThumb.length == 0) {
      prevThumb = $('.thumb-prev').last();
      prevPrev = $('.preview-item').last();
    }

    currentThumb.removeClass('thumbnail-selected');
    prevThumb.addClass('thumbnail-selected');
    currentPrev.removeClass('active-preview');
    prevPrev.addClass('active-preview');
};



var main = function() {

  $('.arrow-right').click(function() {

    moveImageRight();

  });
  
  $('.arrow-left').click(function() {
    moveImageLeft();
  });
  
 /* $('.thumb-prev').click(function() {
    var currentThumb = $('.thumbnail-selected');
    currentThumb.removeClass('thumbnail-selected');
    $(this).addClass('thumbnail-selected');
    
    var previewImages = $('.preview-item);
    var currentPrev = $('.active-preview');
    
    currentPrev.removeClass('active-preview');
    previewImages[$(this).index()].addClass('active-preview');
    
    
  });
  */
  

};

$(document).ready(main);
