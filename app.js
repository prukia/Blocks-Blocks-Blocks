$(function () {
  console.log('document is ready');



  $('button').on('click', function () {
    $('#boxX').append('<div class="square"><button class="delete">X</button></div>');
    $('.square:last').css('background-color', randomNumber());
    console.log("Yay!You made a square!");

    //:last finds the last div with a class of square that was appended to DOM
  });
  $('#boxX').on('click', '.square', function (){
    $(this).css('background-color', 'black');
    // console.log('Square is now black');
    //look in body on click in the square div and turn the box black
  });
  // $('body').on('click', '.square' ,function (){
  //   $(this).css('background-color', randomNumber());
  //   console.log("Now it's a random color!Cool Beans.");
  //
  // });
  $('#boxX').on('click', '.delete', function () {
    $(this).parent().remove();
  });

});
function randomNumber() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;


}
