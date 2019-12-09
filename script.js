// sorry for bad codding without classes because I had a lack of time

let points;
let time = 5000;
let maxPoints;
let startDate;
let food, clean, happiness, health, socialization, money;
let delay;

document.getElementById("easy").onclick = function() {
	points = 3;
	maxPoints = 100;
	setStats();
	delay = setInterval(startTamagotchi, time);
	startDate = startTimer();
}

document.getElementById("hard").onclick = function() {
	points = 5;
	maxPoints = 70;
	setStats();
	delay = setInterval(startTamagotchi, time);
	startDate = startTimer();
}

document.getElementById("ninja").onclick = function() {
	points = 7;
	maxPoints = 100;
	time = 7000;
	setStats();
	delay = setInterval(startTamagotchi, time);
	startDate = startTimer();
}



function changeCat (maxPoints, points) {
	food = document.getElementById("Food").value;
	clean = document.getElementById("Clean").value;
	happiness = document.getElementById("Happiness").value;
	health = document.getElementById("Health").value;
	socialization = document.getElementById("Socialization").value;
	money = document.getElementById("Money").value;

	let total = food + clean + happiness + health + socialization + money;

	if (food > 0 && clean > 0 && happiness > 0 && 
		health > 0 && socialization > 0 && money > 0 ) {

		if (total < 400 && total > 300) {
			document.getElementById("cat").src = "img/cats-second-stage.png";
		} else if (total < 300 && total > 200) {
			document.getElementById("cat").src = "img/cats-third-stage.png";
		} else if (total < 100 && food > 0 && clean > 0 && happiness > 0 &&
					socialization > 0 && health > 0 && money > 0 ) {
			document.getElementById("cat").src = "img/cats-fourth-stage.png";
		}

		food -= points;
		clean -= points;
		happiness -= points;
		health -= points;
		socialization -= points;
		money -= points;

		document.getElementById("eat").onclick = function () {
			if (food <= maxPoints && clean <= maxPoints) {
				food = document.getElementById("Food").value;
				food += 30;
				document.getElementById("Food").value = food;

				clean = document.getElementById("Clean").value;
				clean -= 20;
				document.getElementById("Clean").value = clean;
			} else {
				alert("I cannot eat anymore");
			}
		}

		document.getElementById("wash").onclick = function () {

			if (clean <= maxPoints && happiness <= maxPoints) {
				clean = document.getElementById("Clean").value;
				clean += 40;
				document.getElementById("Clean").value = clean;

				happiness = document.getElementById("Happiness").value;
				happiness -= 20;
				document.getElementById("Happiness").value = happiness;
			} else {
				alert("I cannot wash anymore");
			}
		}

		document.getElementById("run").onclick = function () {

			if (happiness <= maxPoints && food <= maxPoints) {
				happiness = document.getElementById("Happiness").value;
				happiness += 15;
				document.getElementById("Happiness").value = happiness;

				food = document.getElementById("Food").value;
				food -= 20;
				document.getElementById("Food").value = food;
			} else {
				alert("I cannot run anymore");
			}
		}

		document.getElementById("doctor").onclick = function () {

			if (health <= maxPoints && money <= maxPoints) {
				health = document.getElementById("Health").value;
				health += 30;
				document.getElementById("Health").value = health;

				money = document.getElementById("Money").value;
				money -= 20;
				document.getElementById("Money").value = money;
			} else {
				alert("I don't need to visit doctor anymore");
			}
		}

		document.getElementById("bar").onclick = function () {

			if (socialization <= maxPoints && money <= maxPoints
				&& food <= maxPoints && health <= maxPoints) {
				health = document.getElementById("Health").value;
				health -= 10;
				document.getElementById("Health").value = health;

				money = document.getElementById("Money").value;
				money -= 20;
				document.getElementById("Money").value = money;

				socialization = document.getElementById("Socialization").value;
				socialization += 40;
				document.getElementById("Socialization").value = socialization;

				money = document.getElementById("Money").value;
				money -= 20;
				document.getElementById("Money").value = money;

				food = document.getElementById("Food").value;
				food += 10;
				document.getElementById("Food").value = food;

			} else {
				alert("I don't want to visit bar anymore");
			}
		}

		document.getElementById("work").onclick = function () {

			if (socialization <= maxPoints && money <= maxPoints
				&& food <= maxPoints && health <= maxPoints) {
				health = document.getElementById("Health").value;
				health -= 10;
				document.getElementById("Health").value = health;

				money = document.getElementById("Money").value;
				money -= 20;
				document.getElementById("Money").value = money;

				socialization = document.getElementById("Socialization").value;
				socialization += 20;
				document.getElementById("Socialization").value = socialization;

				money = document.getElementById("Money").value;
				money += 50;
				document.getElementById("Money").value = money;

				food = document.getElementById("Food").value;
				food -= 10;
				document.getElementById("Food").value = food;
				
			} else {
				alert("I wanna home");
			}
		}

		document.getElementById("buy").onclick = function () {

			if (money <= maxPoints && food <= maxPoints) {
				money = document.getElementById("Money").value;
				money -= 20;
				document.getElementById("Money").value = money;

				food = document.getElementById("Food").value;
				food += 20;
				document.getElementById("Food").value = food;
			} else {
				alert("I have all products");
			}
		}

		document.getElementById("business").onclick = function () {

			if (health <= maxPoints) {
				health = document.getElementById("Health").value;
				health -= 100;
				document.getElementById("Health").value = health;
			}

		}

		setTimeout(increaseStats, 60000);


		document.getElementById("Food").value = food;
		document.getElementById("Clean").value = clean;
		document.getElementById("Happiness").value = happiness;
		document.getElementById("Health").value = health;
		document.getElementById("Socialization").value = socialization;
		document.getElementById("Money").value = money;

	} else {
		document.getElementById("cat").src = "img/cats-final-stage.png";
		clearInterval(delay);
		let finishDate = new Date ();
		timer(finishDate);
	}	
}


function getRandomStats() {
	let arr = ["food", "clean", "happiness", "health", "socialization", "money"];
	let randomItem = arr[Math.floor(Math.random() * arr.length)];
	return randomItem;
}

function increaseStats() {
	let randomItem = getRandomStats();
	let capitalizedRandomItem = randomItem.charAt(0).toUpperCase() + randomItem.slice(1);
	randomItem = document.getElementById(capitalizedRandomItem).value;
	randomItem += Math.random() * 10;
	document.getElementById(capitalizedRandomItem).value = randomItem;
}


function randomizeStats(selector) {
	document.getElementById(selector).value = Math.random() * (maxPoints - 50) + 50;
}

function setStats() {
	food = randomizeStats("Food");
	clean = randomizeStats("Clean");
	happiness = randomizeStats("Happiness");
	health = randomizeStats("Health");
	socialization = randomizeStats("Socialization");
	money = randomizeStats("Money");
}

function decreasePoints (arg) {
	arg = arg - points;
	return arg;
}

function timer(finishDate) {
	let playedTime = finishDate.getTime() - startDate.getTime();
	document.getElementById("timer").innerHTML = "How long Tamagotchi lived: " + playedTime * 0.001 + " seconds";
	document.getElementById("timer").style.display = "block";
}

function startTimer() {
	let startDate = new Date();
	return startDate;
}

function startTamagotchi() {
	changeCat(maxPoints, points);
}

document.getElementById("restart").onclick = function () {
	location.reload();
}




