function Filter(){
    $('.category').on('change', function(){
      var category_list = [];
      $('#filters :input:checked').each(function(){
        var category = $(this).val();
        category_list.push(category);
      });

      if(category_list.length == 0)
        $('.resultblock').fadeIn();
      else {
        $('.resultblock').each(function(){
          var item = $(this).attr('data-tag');
          if(jQuery.inArray(item,category_list) > -1)
            $(this).fadeIn('slow');
          else
            $ (this).hide();
        });
      }   
    });
    console.log("DefaultFilter")
  }; 



function scrollUp(){
  $('#top').click(function(){

  $('html, body').animate({ scrollTop: 0 }, 'slow');
    
  })
};



function Magnify(){
$('.col-xs-3').click(function(){
 var opacity = 0.4;
  $(this).find("img").before("<div style='z-index:10; font-weight:500; font-size:10px; background-color:black; color:white;'> &nbsp already </div>");
  $(this).find("img").css("opacity", opacity);
  $(this).find(".des1").css("opacity", opacity);
  
})};