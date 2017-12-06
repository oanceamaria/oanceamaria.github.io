document.getElementById("idLogicV").innerHTML = "Business level version: 2017.12.06.2"; 




navigator.geolocation.getCurrentPosition(on_gps_success, on_gps_error);

//--------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat = " + p.coords.latitude + "m" +
	" <br> long = " + p.coords.longitude + "m" +
	" <br> accuracy = " + p.coords.accuracy + "m" +
	" <br> altitude = " + p.coords.altitude + "m";
	
	var mapStr = "https://maps.googleapis.com/maps/api/staticmap?center=" + p.coords.latitude + "," + p.coords.longitude + "&zoom=10&size=320x240&key=AIzaSyCG5pbBXwZYliEtdrfQWsLMCa_6EYmqCIk";
	document.getElementById(idGpsImg).setAttribute("src", mapStr);
} 
//--------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------------