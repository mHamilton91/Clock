//var date = new Date();
//var hands = document.querySelectorAll('.hands');

function setDate() {
	const date = new Date();
	const hands = document.querySelectorAll('.hands');
	const degrees = [((date.getSeconds() * 6) + 90), ((date.getMinutes() * 6) + 90), (((date.getHours() - 12) * 30) + 90)];
	hands[0].style.transform = `rotate(${degrees[0]}deg)`;
	hands[1].style.transform = `rotate(${degrees[1]}deg)`;
	hands[2].style.transform = `rotate(${degrees[2]}deg)`;
	
}

setInterval(setDate, 1000);