

let playerOneName = null;
let playerTwoName = null;
let $myvar;

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

  //when player 1's name and symbol is submitted print on the left box.

  $('#submitForm').on('click', function(){

    if ($('.dropDown').val() === 'X') {
      playerOneSymbol = 'X';

      $('.p1').text( $('.nameForm').val() );

      } else {

      $('.p2').text( $('.nameForm').val() );
      playerTwoSymbol = 'O';

    }//if statement


    });//player details function


  //When grid is clicked player symbol shows on the boxes
  $('.grid').click(function(){

    const box = $(this)[0].id;//variable that stores the index position of clicked square.
    // console.log(box);
// console.log($(this)[0].innerHTML);
    if ($(this)[0].innerHTML === '') {

      if( turn === 1 ){
        console.log(playerOneSymbol);
        $(this).text(playerOneSymbol);
        // $(this).text() === 'X' || 'O';
        turn = 2
        // $('#turn').text(2)

      } else {
        $(this).text('O');
        turn = 1

      }
    }

    // $$$$$LOGIC TO DETERM INE WINNER $$$$$$
    //For loop that returns the arrays of single winCombinations
    for (var i = 0; i < winCombinations.length; i++) {
      // console.log(winCombinations[i]);

      //playerMoves gives us the index position of every move
      let playerMoves = '';

      // For loop within a loop which returns each single digit of the winning combination to
      for (var w = 0; w < winCombinations[i].length; w++) {

        //gridPosition gives us index positions of a winCombination
        let gridPosition = parseInt(winCombinations[i][w]);
        // console.log(gridPosition);

        let board = $('.grid');

        let squareContents = board[winCombinations[i][w] -1 ].innerHTML;

        //this updates the variable so when a player lands on a winCombination it adds on to the playerMoves
        playerMoves =  playerMoves + squareContents

        }//for loop


      //If a player connects three symbols next to eachother then the player wins.
      if(playerMoves === 'XXX'){
        alert('Winner!');

        } else if
        (playerMoves === 'OOO'){
        alert('Winner!');

        }//if/else statement

      } // end of for loop


    }); //For loop


    //If both players fill the board without connecting three symbols then it's a draw.



  });//document.ready
