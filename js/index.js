$(document).ready(start); //use .ready to ensure all DOM loaded before executing code

function start() {
	console.log("Ready"); //ensure js file working and linked
	$("form").submit(getCity); //call getCity function on submit
}

function getCity(event) { //main function to get user input
	event.preventDefault(); //prevent default form submission
	var city = $("#city-type").val().toLowerCase().trim(); //var city to store user input
	changeBackground(city); //call function to change background based on var city
	$("#city-type").val("");
}

function changeBackground(city) { //specify attribute change and background image based on city input
	if (city === "nyc" || city === "new york city" || city === "new york") {
		$("body").attr("class", "nyc");
	}
	else if (city === "san francisco" || city === "sf" || city === "bay area") {
		$("body").attr("class", "sf");
	}
	else if (city === "los angeles" || city === "la" || city === "lax") {
		$("body").attr("class", "la");
	}
	else if (city === "austin" || city === "atx") {
		$("body").attr("class", "austin");
	}
	else if (city === "sydney" || city === "syd") {
		$("body").attr("class", "sydney");
	}
	else {
		alert("Please try again!");
	}
}


