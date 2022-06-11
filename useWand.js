	function getRandomInt(max) {
	  let result = 0;
	  result = Math.floor(Math.random() * max) + 1;
	  $("#diceResult").append('You rolled a ' + result + '!<br />')
	};

	function getRandomCustom() {
	  let roll = prompt("Please enter your dice roll in the format XdXX (eg 4d6):")
	  let numDice = roll.split('d')[0]
	  let sizeDice = roll.split('d')[1]
	  let total = 0;
	  let resultArray = [];

	  for (let i = 0; i < numDice; i++) {
	    let result = Math.floor(Math.random() * sizeDice) + 1;
			total += result;
			resultArray.push(result)
	  }
	  //alert ("Your result is: "+ result);
	  $("#diceResult").append('Rolling ' + roll + ': ' + total + '!<br />')
		$("#diceResult").append('Individual rolls: ' + resultArray + '<br />')
	};

	$(function() {

	  $("#wandButton").click(function() {
	      let result = 0;
	      result = Math.floor(Math.random() * 9998) + 1;
	      $('#wandResult').append(effectArray[result] + '<br />')
	  });

	  $("#wandReset").click(function() {
	    $('#wandResult').text(' ');
	  });

	  $("#diceReset").click(function() {
	    $('#diceResult').text(' ');
	  });

	});
