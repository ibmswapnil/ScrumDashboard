function initMap() {
var data = getData();

var manyataTechPark={lat: 13.042773, lng: 77.621477};
var options= {
    center:manyataTechPark,
    zoom:13,
};
var map=new google.maps.Map(document.getElementById("map"),options);
for(var i in data){
  console.log(data[i].status);
  addMarker({coords:data[i].coords,
    content:data[i].name+'<br>'+data[i].status+'<br>'+data[i].date_time
  })
}


function addMarker(props){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:map
  });
  var infoWindow = new google.maps.InfoWindow({
    content:props.content
  });
  marker.addListener('click',function(){
    infoWindow.open(map,marker);
  })
}
}
function getData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.mlab.com/api/1/databases/scrum/collections/daily_scrum?apiKey=R9ztPCwZwvDdPFp4c44dkQbLSH8m9Pew", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    return response;
}
