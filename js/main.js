
let playerOneSymbol = null;
let playerTwoSymbol = null;

let playerOneName = null;
let playerTwoName = null;

let move = 1

$( document ).ready(function() {
    // console.log( "ready!" );

  //when player 1's name and symbol is submitted print on the left $('.player1').

  $('#submitForm').on('click', function(){

    $('.p1').text( $('.nameForm').val() );
    playerOneName = $('.nameForm').val();

    // console.log( $('.dropDown').val() );

    $('#symbol').text( $('.dropDown').val() );

    playerOneSymbol = $('.dropDown').val();

    if (playerOneSymbol !== null) {
      $('#submitForm').on('click', function(){

        $('.p2').text( $('.nameForm').val() );
        playerTwoName = $('.nameForm').val();

        // console.log( $('.dropDown').val() );

        $('#symbol').text( $('.dropDown').val() );

        playerTwoSymbol = $('.dropDown').val();

      });
      };

  });

  //
  $('.grid').click(function(){
    if( $('this').text() ){
    } if((move%2)== 1){
      $(this).append(playerOneSymbol);
      $(this).css('color', 'red');
    } else {
        $(this).append(playerTwoSymbol);
        $(this).css('color', 'blue');
        }
        move++;
      }); //else
    // });//.grid function

  //If a player connects three symbols next to eachother then the player wins.
  //If both players fill the board without connecting three symbols then it's a draw.

  // function findWinner() {
  //
  // };



    // if($("#bottomLeft").text("") && counter == 3)
    $('#grid').on('click', function(){



    });




  });
