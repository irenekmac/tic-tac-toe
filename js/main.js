
let turn = 1;

let totalMoves = 0;
// parseInt($('.grid').val());

//every possible win combination
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

  //when player 1's name and symbol is submitted print on the left box.
  $('#submitForm').on('click', function(){

    if ($('.dropDown').val() === 'X') {
      playerOneSymbol = 'X';


      $('.p1').text( $('.nameForm').val() );
        playerOneName = $('.p1')[0].innerHTML;

        } else {

        $('.p2').text( $('.nameForm').val() );
          playerTwoSymbol = 'O';
          playerTwoName = $('.p2')[0].innerHTML;

      }//if statement

    });//player details function


    //When grid is clicked player symbol shows on the boxes
    $('.grid').click(function(){

    //variable that stores the index position of clicked square.
    const box = $(this)[0].id;
    // console.log(box);

    if ($(this)[0].innerHTML === '') { //if this square has 'X' or 'O' let next player play.
      // console.log($(this)[0].innerHTML);

      if( turn === 1 ){
        // console.log(playerOneSymbol);
        $(this).text(playerOneSymbol);
          // $(this).text() === 'X' || 'O';
          turn = 2
          // $('#turn').text(2)
          totalMoves++;

        } else {//player O's turn
            $(this).text('O');
            turn = 1
            totalMoves++;

        }//else
      }//if statement
      // totalMoves++;
      // console.count(totalMoves);

    // $$$$$LOGIC TO DETERMINE WINNER $$$$$$
    //For loop that returns the arrays of single winCombinations
    for (var i = 0; i < winCombinations.length; i++) {
      // console.log(winCombinations[i]);

      //playerMoves gives us the index position of every move
      let playerMoves = '';

      // For loop within a loop which returns each single digit of the winning combination to
      for (var w = 0; w < winCombinations[i].length; w++) {

        //gridPosition turns the winCombination index positions into single digits
        let gridPosition = parseInt(winCombinations[i][w]);
        // console.log(gridPosition);

        let board = $('.grid');

        //combining the grid and winCombinations: this is done to comp
        //the player's moves and works with  the winCombinations to find a win.
        let squareContents = board[winCombinations[i][w] -1 ].innerHTML;

        //matching the array of win combos with the player index positions
        playerMoves += squareContents

        }//for loop winCombinations[i]


      //If a player connects three symbols next to eachother then the player wins.
      if(playerMoves === 'XXX'){
        alert(playerOneName + ' is the winner!');

        } else if
        (playerMoves === 'OOO'){
          alert(playerTwoName + ' is the winner!');


        } else if
          (totalMoves === 9) {
            alert('It\'s a Draw.');
            totalMoves = 0; //reset's the game
            turn = 1;
          }


      } // end of for loop


    }); //grid function




  });//document.ready
