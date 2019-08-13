function checkTime(postionMax) {
	if (($("[data-bind='text: Position']")[0].innerText * 1) < postionMax) {
		alert("Posición menor a 10");
	}
}

setInterval('checkTime(1000)',20000);
