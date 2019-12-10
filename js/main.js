
let playerOneSymbol = null;
let playerTwoSymbol = null;

let playerOneName = null;
let playerTwoName = null;

$( document ).ready(function() {
    // console.log( "ready!" );

  //when player 1's name and symbol is submitted print on the left $('.player1').

  $('#submitForm').on('click', function(){

    $('.p1').text( $('.nameForm').val() );
    playerOneName = null;

    // console.log( $('.dropDown').val() );

    $('#symbol').text( $('.dropDown').val() );

    playerOneSymbol = $('.dropDown').val();

    // $('.player1').html($('.nameForm'));

    // if (playerOneSymbol !== null) {
    //   $('#submitForm').on('click', function(){
    //
    //     $('.p2').text( $('.nameForm').val() );
    //     playerTwoName = null;
    //
    //     // console.log( $('.dropDown').val() );
    //
    //     $('#symbol').text( $('.dropDown').val() );
    //
    //     playerTwoSymbol = $('.dropDown').val();
    //
    //   }

  });

  //If a player connects three symbols next to eachother then the player wins.
  //If both players fill the board without connecting three symbols then it's a draw.

  // if
    // if($("#bottomLeft").text("") && counter == 3)
    $('#grid').on('click', function(){



    });




  });
