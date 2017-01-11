$(function () {
  console.log('document is ready');

  $('.square').on('click', '.delete', function () {
      $(this).parent().parent().remove();
    });

$('button').on('click', function () {
     $('body').append('<div class="square"></div>');
     console.log("Yay!You made a square!");
  });
$('body').on('click', '.square', function (){
  $(this).css('background-color', 'black');
  console.log('Square is now black');
  //look in body on click in the square div and turn the box black
});
$('body').on('click', '.square' ,function (){
  $(this).css('background-color', randomNumber());
  console.log("Now it's a random color!Cool Beans.");

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
