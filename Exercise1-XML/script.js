function loadXMLData() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      restaurantDetails(this);
    }
  };

  xmlhttp.open("GET", "restaurants.xml", true);
  xmlhttp.send();
}

function restaurantDetails(xml) {
  var xmlData = xml.responseXML;
  var card="";
  var resData = xmlData.getElementsByTagName("restaurant");

  // Start to fetch the data by using TagName
  for (var i = 0; i < resData.length; i++) {
    card +=
    '<div class="card col-md-5"><div class="card-body" id="card-details">' +
      '<h5 class="card-title">' +
        resData[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      '</h5>' +
      '<ul class="card-text">' +
        '<li><strong>Location:</strong> '+resData[i].getElementsByTagName("address")[0].childNodes[0].nodeValue+'</li>'+
          '<li><strong>Latitude:</strong> '+resData[i].getElementsByTagName("lat")[0].childNodes[0].nodeValue+'</li>' +
          '<li><strong>Longitude:</strong> '+resData[i].getElementsByTagName("lng")[0].childNodes[0].nodeValue+'</li>' +
          '<li><strong>Restaurant Type:</strong> '+resData[i].getElementsByTagName("type")[0].childNodes[0].nodeValue+'</li>'+
      '</ul></div></div>';
       // Print the xml data in table form
       document.getElementById("card-details").innerHTML = card;
  }

  // Print the xml data in card form
  document.getElementById("card-details").innerHTML = card;
}
