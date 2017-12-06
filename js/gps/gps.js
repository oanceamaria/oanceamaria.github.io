document.getElementById("idLogicV").innerHTML = "Business level version: 2017.12.06.5"; 




navigator.geolocation.watchPosition(on_gps_success, on_gps_error);

//--------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat = " + p.coords.latitude + "m" +
	" <br> long = " + p.coords.longitude + "m" +
	" <br> accuracy = " + p.coords.accuracy + "m" +
	" <br> altitude = " + p.coords.altitude + "m" +
	" <br> speed = " + p.coords.speed + "m/s";
	
	var mapStr = "https://maps.googleapis.com/maps/api/staticmap?" + 
	"markers=color:blue|" + p.coords.latitude + "," + p.coords.longitude + "|Palatul+Apor&" + 
	"path=color:0xff0000|"+ p.coords.latitude + "," + p.coords.longitude +  "|Palatul+Apor&" + 
	"zoom=16&" +
	"size=320x240&" +
	"key=AIzaSyCG5pbBXwZYliEtdrfQWsLMCa_6EYmqCIk";
	document.getElementById("idGpsImg").setAttribute("src", mapStr);
} 
//--------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------------