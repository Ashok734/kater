
// avigation
$(window).on('scroll',function(){
        if ($(window).scrollTop()){
          $('nav').addClass('black');
        }
        else 
        {
            $('nav').removeClass('black');
        }
      });



// dashboard
$( function() {
    $( ".toggle-nav" ).click( function() {
      $( 'body' ).toggleClass( "sidebar-animate" );
    });
  });
  
  
  $(document).ready(function(){
  $('.launch-modal').click(function(){
    $('#add-charges').modal({
      backdrop: 'static'
    });
  }); 
});

$('.add-clon').on('click', '.remove', function() {
  $('.remove').closest('.add-clon').find('.element').not(':first').last().remove();
});
$('.add-clon').on('click', '.clone', function() {
  $('.clone').closest('.add-clon').find('.element').first().clone().appendTo('.results');
})

$(".dsy button").addClass("active");
 
 $(document).ready(function(){
  $('button').click(function(){
    $('.dsy  button').removeClass("active");
    $(this).addClass("active");
});
});



 // calendar

 $(document).ready(function () {
         $("#from5").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 $(document).ready(function () {
         $("#to6").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
  $(document).ready(function () {
         $("#from7").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 $(document).ready(function () {
         $("#to7").datepicker({
          dateFormate:'dd/mm/yy',
         });
       });
 

 // pophover
 $(function () {
  $('[data-toggle="popover"]').popover();
});


 // tabs
 
  // my cv images viewer
  // (function(a){a.createModal=function(b){defaults={title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
* Here is how you use it
*/
$(function(){    
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        $.createModal({
        title:'My Title',
        message: iframe,
        closeButton:true,
        scrollable:false
        });
        return false;        
    });    
})