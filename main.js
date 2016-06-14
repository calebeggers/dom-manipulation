var valueOne = document.querySelector("#value-one");

var valueTwo = document.querySelector("#value-two");

var button = document.querySelector("#calculate-button");
	button.addEventListener('click', function (event) {
	event.preventDefault();
	console.log("hello");
	answer.textContent = Number(valueOne.value) + Number(valueTwo.value);
	});

var answer = document.querySelector("#answer");