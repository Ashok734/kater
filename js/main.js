$(document).ready(function(){
  $("#pills-charter-icons-tab").click(function(){
    $("#pills-charter-tab").addClass("icons-tabs1");
    // $('.private-filter').css({'display':'none'});
    
  });
});
// click

// click

$(document).ready(function(){
  $("#pills-join-tab").click(function(){
    $("#pills-charter-tab").removeClass("icons-tabs1");
  });
});
$(document).ready(function(){
  $("#pills-join-icons-tab").click(function(){
    $("#pills-join-tab").addClass("icons-tabs2");
   
  });
});
$(document).ready(function(){
  $("#pills-charter-tab").click(function(){
    $("#pills-join-tab").removeClass("icons-tabs2");
   
  });
});
$(document).ready(function(){
  $("#pills-charter-icons-tab").click(function(){
    $("#pills-join-tab").removeClass("icons-tabs2");
   
  });
});
// buy boat
$(document).ready(function(){
  $("#pills-buy-icons-tab").click(function(){
    $("#pills-buy-tab").addClass("icons-tabs3");
   
  });
});
$(document).ready(function(){
  $("#pills-charter-tab").click(function(){
    $("#pills-buy-tab").removeClass("icons-tabs3");
  });
});
$(document).ready(function(){
  $("#pills-buy-tab").click(function(){
    $("#pills-charter-tab").removeClass("icons-tabs3");
  });
});
$(document).ready(function(){
  $("#pills-buy-tab").click(function(){
    $("#pills-join-tab").removeClass("icons-tabs2");
  });
});
$(document).ready(function(){
  $("#pills-join-tab").click(function(){
    $("#pills-buy-tab").removeClass("icons-tabs3");
  });
});
$(document).ready(function(){
  $("#pills-join-icons-tab").click(function(){
    $("#pills-buy-tab").removeClass("icons-tabs3");
  });
});

$(document).ready(function(){
  $("#pills-charter-icons-tab").click(function(){
    $("#pills-buy-tab").removeClass("icons-tabs3");
  });
});
$(document).ready(function(){
  $("#pills-join-icons-tab").click(function(){
    $("#pills-charter-tab").removeClass("icons-tabs1");
  });
});

$(document).ready(function(){
  $("#pills-buy-icons-tab").click(function(){
    $("#pills-join-tab").removeClass("icons-tabs2");
  });
});
$(document).ready(function(){
  $("#pills-buy-icons-tab").click(function(){
    $("#pills-charter-tab").removeClass("icons-tabs1");
  });
});
$(document).ready(function(){
  $("#pills-buy-tab").click(function(){
    $("#pills-charter-tab").removeClass("icons-tabs1");
  });
});





$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(window).on('scroll',function(){
        if ($(window).scrollTop()){
          $('nav').addClass('black');
        }
        else 
        {
            $('nav').removeClass('black');
        }
      });



$('.testimonial-slide').owlCarousel({
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});



$('.yachit-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
$('.tools').owlCarousel({
    center: true,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay: true,
            slideTransition: 'linear',
            autoplayTimeout: 4000,
            autoplaySpeed: 4000,
            autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

// read more

$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


// date
$(document).ready(function () {
         $("#from").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
$(document).ready(function () {
         $("#to").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
$(document).ready(function () {
         $("#fromm").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
$(document).ready(function () {
         $("#too").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
 // for sm size
$(document).ready(function () {
         $("#fromsm").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
$(document).ready(function () {
         $("#tosm").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
$(document).ready(function () {
         $("#frommsm").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });
$(document).ready(function () {
         $("#toosm").datepicker({
         dateFormate:'dd/mm/yy',
         
         });
       });


// scrolling buttom
 $(window).scroll(function(){
    if ($(window).scrollTop() > 500)
     {
     $("#top").fadeIn();
     }
     else
     {
      $("#top").fadeOut();
     
     }

 });
$("#top").click(function(){
    $("html").animate({scrollTop:0},2000);
});


// selector
    $(document).ready(function() {
        $('#multiple-checkboxes').multiselect({
          includeSelectAllOption: true,
        });
    });


    // selector

    // Created by @conmarap.

Array.prototype.search = function(elem) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] == elem) return i;
    }
    
    return -1;
};

var Multiselect = function(selector) {
    if(!$(selector)) {
        console.error("ERROR: Element %s does not exist.", selector);
        return;
    }

    this.selector = selector;
    this.selections = [];

    (function(that) {
        that.events();
    })(this);
};

Multiselect.prototype = {
    open: function(that) {
        var target = $(that).parent().attr("data-target");

        // If we are not keeping track of this one's entries, then
        // start doing so.
        if(!this.selections) {
            this.selections = [ ];
        }

        $(this.selector + ".multiselect").toggleClass("active");
    },

    close: function() {
        $(this.selector + ".multiselect").removeClass("active");
    },

    events: function() {
        var that = this;

        $(document).on("click", that.selector + ".multiselect > .title", function(e) {
            if(e.target.className.indexOf("close-icon") < 0) {
                that.open();
            }
        });

        $(document).on("click", that.selector + ".multiselect option", function(e) {
            var selection = $(this).attr("value");
            var target = $(this).parent().parent().attr("data-target");

            var io = that.selections.search(selection);

            if(io < 0) that.selections.push(selection);
            else that.selections.splice(io, 1);

            that.selectionStatus();
            that.setSelectionsString();
        });

        $(document).on("click", that.selector + ".multiselect > .title > .close-icon", function(e) {
            that.clearSelections();
        });

        $(document).click(function(e) {
            if(e.target.className.indexOf("title") < 0) {
                if(e.target.className.indexOf("text") < 0) {
                    if(e.target.className.indexOf("-icon") < 0) {
                        if(e.target.className.indexOf("selected") < 0 ||
                           e.target.localName != "option") {
                            that.close();
                        }
                    }
                }
            }
        });
    },

    selectionStatus: function() {
        var obj = $(this.selector + ".multiselect");

        if(this.selections.length) obj.addClass("selection");
        else obj.removeClass("selection");
    },

    clearSelections: function() {
        this.selections = [];
        this.selectionStatus();
        this.setSelectionsString();
    },

    getSelections: function() {
        return this.selections;
    },

    setSelectionsString: function() {
        var selects = this.getSelectionsString().split(", ");
        $(this.selector + ".multiselect > .title").attr("title", selects);

        var opts = $(this.selector + ".multiselect option");

        if(selects.length > 6) {
            var _selects = this.getSelectionsString().split(", ");
            _selects = _selects.splice(0, 6);
            $(this.selector + ".multiselect > .title > .text")
                .text(_selects + " [...]");
        }
        else {
            $(this.selector + ".multiselect > .title > .text")
                .text(selects);
        }

        for(var i = 0; i < opts.length; i++) {
            $(opts[i]).removeClass("selected");
        }

        for(var j = 0; j < selects.length; j++) {
            var select = selects[j];

            for(var i = 0; i < opts.length; i++) {
                if($(opts[i]).attr("value") == select) {
                    $(opts[i]).addClass("selected");
                    break;
                }
            }
        }
    },

    getSelectionsString: function() {
        if(this.selections.length > 0)
            return this.selections.join(", ");
        else return "Any Type";
    },

    setSelections: function(arr) {
        if(!arr[0]) {
            error("ERROR: This does not look like an array.");
            return;
        }

        this.selections = arr;
        this.selectionStatus();
        this.setSelectionsString();
    },
};

$(document).ready(function() {
    var multi = new Multiselect("#countries");
});

// Upload images

$(document).ready(function(){
    $('#file-input').on('change', function(){ //on file input change
        if (window.File && window.FileReader && window.FileList && window.Blob) //check File API supported browser
        {
            
            var data = $(this)[0].files; //this file data
            
            $.each(data, function(index, file){ //loop though each file
                if(/(\.|\/)(gif|jpe?g|png)$/i.test(file.type)){ //check supported file type
                    var fRead = new FileReader(); //new filereader
                    fRead.onload = (function(file){ //trigger function on successful read
                    return function(e) {
                        var img = $('<img/>').addClass('thumb').attr('src', e.target.result); //create image element 
                        $('#thumb-output').append(img); //append image to output element
                    };
                    })(file);
                    fRead.readAsDataURL(file); //URL representing the file's data.
                }
            });
            
        }else{
            alert("Your browser doesn't support File API!"); //if File API is absent
        }
    });
  
  $(".remove").click(function (e) {
        e.preventDefault();
        data.splice(0, 1);
        $('#thumb-output a').eq(data.length).remove();
    });
});

// start side container map
$(function() { // document ready
    if ($('#sticky-map').length) { // make sure "#sticky-map" element exists
        var el = $('#sticky-map');
        var stickyTop = $('#sticky-map').offset().top // returns number
        var stickyHeight = $('#sticky-map').height();

        $(window).scroll(function() { // scroll event
            var limit = $('#footer-wrapper').offset().top - stickyHeight - 50;

            var windowTop = $(window).scrollTop(); // returns number

            if (stickyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: 50
                });
            } else {
                el.css('position', 'static');
            }

            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
        });
    }
});

// SEE images

$('.see-img').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
     navText : ["See Pictures >>"],
    autoplay:false,
    // animateIn: 'fadeIn',
    // animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// list purchase from
$(function() { // document ready
    if ($('.chart-purchase').length) { // make sure "#sticky-map" element exists
        var el = $('.chart-purchase');
        var stickyTop = $('.chart-purchase').offset().top; // returns number
        var stickyHeight = $('.chart-purchase').height();

        $(window).scroll(function() { // scroll event
            var limit = $('#here-few').offset().top - stickyHeight - 50;

            var windowTop = $(window).scrollTop(); // returns number

            if (stickyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: 60
                   
                });
            } else {
                el.css('position', 'static');
            }

            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
        });
    }
});
 // pophover
 $(function () {
  $('[data-toggle="popover"]').popover();
});


 // SEARCH  FILTER
 
 