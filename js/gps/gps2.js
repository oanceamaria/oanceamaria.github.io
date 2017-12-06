document.getElementById("idLogicV").innerHTML = "Business level version: 2017.12.06.0"; 

navigator.geolocation.watchPosition(on_gps_success, on_gps_error);
var marker;
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
	
	marker = new google.maps.Marker({
		position:{lat:p.coords.latitude, lng:p.coords.longitude},
		title:"LMM!",
		animation:google.maps.Animation.DROP,
		map:mapObj
	});
	marker.addListener("click",onMarkerClick);
	//marker.setMap(mapObj);
} 
function onMarkerClick(){
	if(marker.getAnimation() !== null ){
		marker.setAnimation(null);
	}else{
		marker.setAnimation(google.maps.Animation.BOUNCE);
	}
} 

//--------------------------------------
function on_gps_error(e)
{
	alert(e.code);
}
//--------------------------------------