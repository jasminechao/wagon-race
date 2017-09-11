// $(function(){

//   $('.btn-danger').click(function() {
//   $('#player1_race > .active').removeClass('active').next('#player1_race > td').addClass("active");

//   });

//   $('.btn-warning').click(function() {
//   $('#player2_race > .active').removeClass('active').next('#player2_race > td').addClass("active");


//   });

// });


$(document).ready(function() {
  $(document).on('keyup', function(event) {
    if ( event.key == 'q' ) {
      move(1);
    }
    if ( event.key == 'p' ) {
      move(2);
    }
    checkWin();
  })

  function move(number) {
    $('#player' + number +'_race > .active').removeClass('active').next('#player' + number +'_race > td').addClass("active");
  }

  function checkWin() {
   if ($('#player1_race > .active').hasClass('win')) {
    alert("Player 1 won!")
  }
  if ($('#player2_race > .active').hasClass('win')) {
    alert("Player 2 won!")
  }
}
});

