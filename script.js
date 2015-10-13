$(document).ready(function() {
  console.log("Script included!");
  $('#left button').click(function() {
    $('#left').fadeOut('fast');
  });
  
  $('#center button').click(function() {
    $('#center').fadeOut('fast');
  });

  $('#right button').click(function() {
    $('#right').fadeOut('fast');
  });

  $('#hide').click(function() {
    $('.mainPhoto, #headshot').toggle();
  });

  $('#left, #center, #right').hover(
    function(){
        $(this).addClass('import');
    },
    function(){
        $(this).removeClass('import');
    }
  );
  $()
});

