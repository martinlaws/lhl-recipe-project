$(document).ready(function() {
  console.log("Script included!");
  $('#left button, #center button, #right button').click(function() {
    $(this).fadeOut('fast');
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

