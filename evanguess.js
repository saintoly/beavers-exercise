var player = true;

var boardState = [
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null]
	];


	var shipState = [
        [true, false, false, false, false, true, true, true, false, false],
        [true, false, false, false, false, false, false, true, true, true],
        [true, false, true, true, false, true, false, false, false, false],
        [true, false, false, false, false, true, false, true, false, false],
        [false, false, false, false, false, true, false, true, false, false],
        [false, true, false, false, false, true, true, true, false, false],
        [false, true, false, true, true, false, false, false, false, false],
        [false, false, false, false, false, true, true, true, false, false],
        [false, false, false, false, false, false, true, true, false, false],
        [false, false, true, true, false, false, true, true, false, false],
        [false, true, true, false, false, true, true, true, false, false],
        ];
var data = {
    playMe: function(cell) {
        var row = cell.getAttribute('row');
        var column = cell.getAttribute('column');
        if (boardState[row][column] == null) {
            if(player){
            
                boardState[row][column] = 'x';
            } else {
                boardState[row][column] = 'o';
            }
        player = !player;
            
        } else {
            console.log('it is not your turn');
        }
        // get div by id
        // check if most recent guess was a hit
        // write to div
        view.populateBoard(boardState);
        // this.hitormiss(shipState);
    },
    
};
var boats = {
    
    hitormiss: function(row, column) {
        var hitormiss = '';
        // hit.  : boardstate isn't null and shipstate is true
        if((boardState[row][column] != null) && (shipState[row][column] == true)){
            hitormiss = 'hit';
            //miss : baordstate isnt null and shipstate is false
            } else if((boardState[row][column] != null) && (shipState[row][column] == false)){
            hitormiss = 'miss';
        // empty : boardstate is null
        } else {
            hitormiss = '';
        }
        return hitormiss;
    }
};
var view = {
    populateBoard: function(boardNow){
        var bo = document.getElementById('board');
        var row;
        var col;
        // populate the Board;
        for(var i=0; i < 10; i++){
            row = bo.children[i];
            for(var j = 0; j < 10; j++){
                col = row.children[j];
                col.innerHTML = boats.hitormiss(i, j);
            }
        } 
    }
};
    
/*

var boardState;
function buildBoard() {
	var board = document.getElementById('ticTacBoard');
	var row;
	var cell;
	for(var i = 0; i < 10; i++) {
		row = board.insertRow(i);
		row.setAttribute('row', i);
		for(var j = 0; j < 10; j++) {
			cell = row.insertCell(j); 
			// why not set it to null directly?
			// because what if you want to finish a saved game?
			cell.innerHTML = boardState[i][j];
			cell.setAttribute('column', j);
			cell.setAttribute('onclick', 'play(this)');
		};
	};
};
*/
var good = prompt("waiting for you");

/**function addRow(content,morecontent)
{
         if (!document.getElementsByTagName) return;
         tabBody=document.getElementsByTagName("tbody").item(0);
         row=document.createElement("tr");
         cell1 = document.createElement("td");
         cell2 = document.createElement("td");
         textnode1=document.createTextNode(content);
         textnode2=document.createTextNode(morecontent);
         cell1.appendChild(textnode1);
         cell2.appendChild(textnode2);
         row.appendChild(cell1);
         row.appendChild(cell2);
         tabBody.appendChild(row);


}
*/
/*
// set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// get the container element
var gameBoardContainer = document.getElementById("gameboard");

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
/*
var hitCount = 0;

/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)
   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/
/*
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedo, false);

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(e) {
	debugger
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
		if (gameBoard[row][col] == 0) {
			e.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 3;
			
		// if player clicks a square with a ship, change the color and change square's value
		} else if (gameBoard[row][col] == 1) {
			e.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
			gameBoard[row][col] = 2;
			
			// increment hitCount each time a ship is hit
			hitCount++;
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}
			
		// if player clicks a square that's been previously hit, let them know
		} else if (gameBoard[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
    e.stopPropagation();
}
*/
