function rezolvaEc(){
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	
	var delta = b * b - 4 * a * c;
	
	var x1Re, x1Im, x2R2, x2Im;
	if (delta >= 0) {
		x1Re = (-b + Math.sqrt(delta) ) / (2 * a);
		x2Re = (-b - Math.sqrt(delta) ) / (2 * a);
		x1Im = x2Im = 0;	
	} else {
		x1Re = -b /( 2 * a);
		x1Im = Math.sqrt(-delta) / (2 * a);
		x2Re = -b /( 2 * a);
		x2Im = -Math.sqrt(-delta) / (2 * a);
	}
	
	document.getElementById("x1").innerHTML = "X1 = " + x1Re + " + "  + x1Im + "*i";
	document.getElementById("x2").innerHTML = "X2 = " + x2Re + " + " + x2Im + "*i";
}