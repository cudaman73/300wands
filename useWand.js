	function getRandomInt(max){
		let result = 0;
		let min = 1;

		result = Math.floor(Math.random() * (max - min + 1)) + min;
		//alert ("Your result is: "+ result);
		let el = document.querySelector("#diceResult");
		el.innerHTML += 'You rolled a ' + result + '!<br />'
	};

	function getRandomCustom(){
		let numDice = document.getElementById('numDice').value;
		let sizeDice = document.getElementById('sizeDice').value;
		let result = 0;
		let min = 1;
		var i;
		for (i = 0; i < numDice; i++){
			result += Math.floor(Math.random() * (sizeDice - min + 1)) + min;
		}
		//alert ("Your result is: "+ result);
		let el = document.querySelector("#diceResult");
		el.innerHTML += 'You rolled a ' + result + '!<br />'
	};

$(function() {

	$("#wandButton").click(function() {
		try {
			let result = 0;
			result = Math.floor(Math.random() * (9999 - 1)) + 1;
			let el = document.querySelector('#wandResult');
			el.innerHTML += effectArray[result] + '<br />';
		}
		catch(e) {
			alert (e || e.message);
		}
	});

	$("#wandReset").click(function(){
		try {
			document.querySelector('#wandResult').innerHTML = ' ';
		}
		catch(e) {
			alert (e || e.message);
		}
	});

	$("#diceReset").click(function(){
		try {
			document.querySelector('#diceResult').innerHTML = ' ';
		}
		catch(e) {
			alert (e || e.message);
		}
	});



	/*function useWand() {
		let result = 0;
		let min = 1;
		result = Math.floor(Math.random() * (9999 - min + 1)) + min;
		let el = document.querySelector('wandResults');
		el.innerHTML +'<p> You rolled ' + result + '!</p>';
	};*/
});
