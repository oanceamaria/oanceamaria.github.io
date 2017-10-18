function ecuatie2(){
	this.citeste = function(){
		this.a = document.getElementById("a").value;
		this.b = document.getElementById("b").value;
		this.c = document.getElementById("c").value;
	};
	
	this.calculeaza = function(){
		var delta = this.b * this.b - 4 * this.a * this.c;
		if (delta >= 0) {
			this.x1 = {re:(-this.b + Math.sqrt(delta) ) / (2 * this.a), im:0};
			this.x2 = {re:(-this.b - Math.sqrt(delta) ) / (2 * this.a), im:0};	
		} else {
			this.x1 = { re:-this.b /( 2 * this.a), im:Math.sqrt(-delta) / (2 * this.a)};
			this.x2 = { re:-this.b /( 2 * this.a), im:-Math.sqrt(-delta) / (2 * this.a)};
		}
	};
	
	this.afisaza = function(){
		document.getElementById("x1").innerHTML = "x1 = " + this.x1.re + "+" + this.x1.im + "*i";
		document.getElementById("x2").innerHTML = "x2 = " + this.x2.re + "+" + this.x2.im + "*i";
	};
}

function rezolvaEc(){
	var e = new ecuatie2();
	e.citeste();
	e.calculeaza();
	e.afisaza();
}