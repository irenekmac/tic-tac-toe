
let playerOneSymbol = null;
let playerTwoSymbol = null;

let playerOneName = null;
let playerTwoName = null;

let playerTurn = true;//determines which player plays

let turn = 1;

const winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
   ];

$( document ).ready(function() {
    // console.log( "ready!" );

  //when player 1's name and symbol is submitted print on the left $('.player1').

  $('#submitForm').on('click', function(){

    if ($('.dropDown').val() === 'X') {

      $('.p1').text( $('.nameForm').val() );

      } else {

      $('.p2').text( $('.nameForm').val() );

    }



    // $('.p1').text( $('.nameForm').val() );
    // playerOneName = $('.nameForm').val();
    //
    // // console.log( $('.dropDown').val() );
    //
    // $('#symbol').text( $('.dropDown').val() );
    //
    // playerOneSymbol = $('.dropDown').val();

    //
    // //if statement for when player1 enters details player2 can put details in next
    // if (playerOneSymbol !== null) {
    //   $('#submitForm').on('click', function(){
    //
    //     $('.p2').text( $('.nameForm').val() );//.nameForm will log name on both boxes
    //     playerTwoName = $('.nameForm').val();
    //
    //     // console.log( $('.dropDown').val() );
    //
    //     $('#symbol').text( $('.dropDown').val() );
    //
    //     playerTwoSymbol = $('.dropDown').val();
    //
    //     });//if statement
    //
    //   };//if statement

    });//player details function


  //When grid is clicked player symbol shows on the boxes
  $('.grid').click(function(){
    // if( turn === 1 && !$(this).text() ){

    const box = $(this)[0].id;
    // console.log(box);

      if( turn === 1 ){
      $(this).text('X');
      turn = 2
      // $('#turn').text(2)


      } else {
          $(this).text('O');
          turn = 1

      }
        // $('#turn').text(turn)


    // $$$$$LOGIC TO DETERM INE WINNER $$$$$$
    //For loop that returns the arrays of single winCombinations
    for (var i = 0; i < winCombinations.length; i++) {
      // console.log(winCombinations[i]);

      //playerMoves gives us the index position of every move
      let playerMoves = '';
      // For loop within a loop which returns each single digit of the winning combination to
      for (var w = 0; w < winCombinations[i].length; w++) {
        let gridPosition = parseInt(winCombinations[i][w]);
        // console.log(gridPosition);
        let board = $('.grid');
        let squareContents = board[winCombinations[i][w] -1 ].innerHTML;
        playerMoves =  playerMoves + boardContents
      }


      // test to see if winner

      if(playerMoves === 'XXX'){
        alert('Winner!');

        } else if
        (playerMoves === 'OOO'){
        alert('Winner!');

      }

  } // end of for loop





      }); //else
    // });//.grid function

  //If a player connects three symbols next to eachother then the player wins.
  //If both players fill the board without connecting three symbols then it's a draw.

  // const draw = function(){
  //    turn === 9;
  //    return
  //
  //  };






  });//document.ready
