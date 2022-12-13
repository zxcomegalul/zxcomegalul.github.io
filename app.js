let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
let btn14 = document.getElementById("btn14");
let btn15 = document.getElementById("btn15");
let btn16 = document.getElementById("btn16");
let btn17 = document.getElementById("btn17");
let btn18 = document.getElementById("btn18");
let btn19 = document.getElementById("btn19");
let btn20 = document.getElementById("btn20");
let btn21 = document.getElementById("btn21");
let btn22 = document.getElementById("btn22");
let btn23 = document.getElementById("btn23");
let btn24 = document.getElementById("btn24");
let btn25 = document.getElementById("btn25");
let btn26 = document.getElementById("btn26");
let btn27 = document.getElementById("btn27");
let btn28 = document.getElementById("btn28");
let btn29 = document.getElementById("btn29");
let btn30 = document.getElementById("btn30");
let btn31 = document.getElementById("btn31");
let btn32 = document.getElementById("btn32");
let btn33 = document.getElementById("btn33");
let btn34 = document.getElementById("btn34");
let btn35 = document.getElementById("btn35");
let btn36 = document.getElementById("btn36");
let btn37 = document.getElementById("btn37");
let btn38 = document.getElementById("btn38");
let btn39 = document.getElementById("btn39");
let btn40 = document.getElementById("btn40");
let btn41 = document.getElementById("btn41");
let btn42 = document.getElementById("btn42");
let btn43 = document.getElementById("btn43");
let btn44 = document.getElementById("btn44");
let btn45 = document.getElementById("btn45");
let btn46 = document.getElementById("btn46");
let btn47 = document.getElementById("btn47");
let btn48 = document.getElementById("btn48");
let btn49 = document.getElementById("btn49");
let btn50 = document.getElementById("btn50");

btn1.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgRef").style.display = "block";
});

btn2.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgTV").style.display = "block";
});

btn3.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgTea").style.display = "block";
});

btn4.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgPlate").style.display = "block";
});

btn5.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgDishWash").style.display = "block";
});

btn6.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgWash").style.display = "block";
});
btn7.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgMicWave").style.display = "block";
});
btn8.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgIron").style.display = "block";
});
btn9.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgVacuum").style.display = "block";
});
btn10.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "none";
	document.getElementById("pgCofee").style.display = "block";
});

btnMain3.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgTV").style.display = "none";
});
btnMain2.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgRef").style.display = "none";
});

btnMain4.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgTea").style.display = "none";
});
btnMain5.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgPlate").style.display = "none";
});

btnMain6.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgDishWash").style.display = "none";
});
btnMain7.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgWash").style.display = "none";
});

btnMain8.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgMicWave").style.display = "none";
});
btnMain9.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgIron").style.display = "none";
});

btnMain10.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgVacuum").style.display = "none";
});
btnMain11.addEventListener("click", function () {
	document.getElementById("pgMain").style.display = "block";
	document.getElementById("pgCofee").style.display = "none";
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
	tg.sendData(item);
});

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;


usercard.appendChild(p);