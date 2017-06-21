$(function(){


var currentMark = 'images/X.png'

var markX = 'images/X.png';
var markO = 'images/O.png';

var numberOfX = 0;
var numberOfO = 0;

var winnner = ''



function swapPlayer(){

	if(currentMark === markX){

		currentMark = markO;

	}else if(currentMark === markO){

		currentMark = markX;
	}

}

function checkRowX(id) {

	var $cell = $(id)


	var cellSrc = $($cell).attr('src')

	// console.log(cellSrc);

	if(cellSrc === 	markX){

		numberOfX = numberOfX +1;
	}

	// if (cellSrc === markO) {

	// 	numberOfO++;
	// }

	
}

// function checkWinner(){


// 	for (var i = 0; i < 3; i++) {
		
// 		var id = '#0' + i.toString();
// 			// checkRow(id);
// 			checkRowX(id);


// 		if(numberOfX === 3){

// 			winnner = 'X';
// 			console.log(winnner);

// 		}
// 		console.log(numberOfX);


// 	}


	

// 	if(numberOfO===3){


// 	}

// }

function checkRowOne(){

	var cellSource = $('#00').attr('src');
	if(cellSource = markX ){
		numberOfX ++

	}

	var cellSource = $('#01').attr('src');
	if(cellSource = markX ){
		numberOfX ++

	}

	var cellSource = $('#02').attr('src');
	if(cellSource = markX ){
		numberOfX ++

	}

	var cellSource = $('#00').attr('src');
	if(cellSource = markO ){
		numberOfO ++

	}

	var cellSource = $('#01').attr('src');
	if(cellSource = markO ){
		numberOfO ++

	}

	var cellSource = $('#02').attr('src');
	if(cellSource = markO ){
		numberOfO ++

	}


	if (numberOfX > 2) {

		winnner = 'X';
	}

	if (numberOfO > 2) {

		winnner = 'O';
	}

}

// function cheskRowTwo(){

// 	var cellSource = $('#00').attr('src');
// 	if(cellSource = markX ){
// 		numberOfX ++

// 	}

// 	var cellSource = $('#01').attr('src');
// 	if(cellSource = markX ){
// 		numberOfX ++

// 	}

// 	var cellSource = $('#02').attr('src');
// 	if(cellSource = markX ){
// 		numberOfX ++

// 	}

// 	var cellSource = $('#00').attr('src');
// 	if(cellSource = markO ){
// 		numberOfX ++

// 	}

// 	var cellSource = $('#01').attr('src');
// 	if(cellSource = markO ){
// 		numberOfX ++

// 	}

// 	var cellSource = $('#02').attr('src');
// 	if(cellSource = markO ){
// 		numberOfX ++

// 	}



// 	if (numberOfX > 2) {

// 		winnner = 'X';
// 	}

// 	if (numberOfO > 2) {

// 		winnner = 'O';
// 	}

// }
    





$('img').click(function (event) {
	
	var src = $(this).attr('src')

	if(src ===""){

		$(this).attr('src', currentMark);
		swapPlayer();
		checkRowOne();
		console.log(numberOfX);
	}



})















})

