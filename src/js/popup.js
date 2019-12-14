
let loc_card = document.getElementById("location-card");

let main_body = document.getElementById("text-body");
let search_body = document.getElementById("search");

let search_toggle = document.getElementById("query");

search_body.style.display = "none";

let toggle = true;

function showPosition(position) {
    loc_card.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    loc_card.innerHTML = "Geolocation Not Availible";
}

search_toggle.onclick = function () {
    if (toggle) {
        main_body.style.display = "none";
        search_body.style.display = "block";
        toggle = false;
    } else {
        search_body.style.display = "none";
        main_body.style.display = "block";
        toggle = true;
    }
}