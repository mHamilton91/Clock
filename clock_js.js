//var date = new Date();
//var hands = document.querySelectorAll('.hands');

function setDate() {
	const date = new Date();
	const hands = document.querySelectorAll('.hands');
	const degrees = [((date.getSeconds() * 6) + 90), ((date.getMinutes() * 6) + 90), (((date.getHours() - 12) * 30) + 90)];
	//console.log((date.getHours() * 6) + 90);
	/* console.log(degrees[0]);
	console.log(degrees[1]);
	console.log(degrees[2]);
	const seconds = (date.getSeconds() * 6) + 90;
	const minutes = (date.getMinutes() * 6) + 90;
	const hours = date.getHours();
	*/
	hands[0].style.transform = `rotate(${degrees[0]}deg)`;
	hands[1].style.transform = `rotate(${degrees[1]}deg)`;
	hands[2].style.transform = `rotate(${degrees[2]}deg)`;
	
}

setInterval(setDate, 1000);
