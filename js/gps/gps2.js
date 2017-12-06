document.getElementById("idLogicV").innerHTML = "Business level version: 2017.12.06.0"; 

navigator.geolocation.watchPosition(on_gps_success, on_gps_error);

//--------------------------------------
function on_gps_success(p)
{
	document.getElementById("id_p").innerHTML = "lat = " + p.coords.latitude + "m" +
	" <br> long = " + p.coords.longitude + "m" +
	" <br> accuracy = " + p.coords.accuracy + "m" +
	" <br> altitude = " + p.coords.altitude + "m" +
	" <br> speed = " + p.coords.speed + "m/s";
	
	var mapObj = new google.maps.Map(document.getElementById("idMap"));
	mapObj.setCenter( {lat:p.coords.latitude, lng:p.coords.longitude} );
	mapObj.setZoom(10);
} 
//--------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------------