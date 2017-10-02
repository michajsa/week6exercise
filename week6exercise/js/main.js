$(document).ready(function() {
  $('#button1').click(function(){
    $('img').hide();
  })
  $('#button2').dblclick(function(){
    $('img').show();
  })
  $('#button3').click(function(){
    $('img').fadeToggle();
  })
  $('#button4').click(function(){
    $('h1').toggleClass('changed')
  })
  $('#button5').click(function(){
    $('ul').append('<li>Three</li>');
  })
  $('#button6').click(function(){
    $('ul').prepend('<li>Zero</li>');
  })
  $('#newnewDiv').hover(function(){
    $(this).animate({
      height: '500px',
      width: '700px',
      opacity: '0.5'
    })
  })
  $('#newh2').mouseenter(function(){
    $(this).slideUp();
  })
  $('#newnewnewDiv').hover(function(){
    $(this).fadeOut();
  })
  $('#button7').click(function(){
    $('#newnewnewDiv').fadeIn();
  })
  $('#divSnow').websnowjq({
    snowFlakes: 150
  });
})
