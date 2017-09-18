/**
 * Created by angie on 7/2/17.
 */
var listingsContainer = document.getElementById('bestbuys');
/*
 This method calls server API and fetches listings
 and for each listings it will create a new element in the HTML UI
 */
function getListingsFromServer() {
    $.getJSON( "https://princeton-real-estate.firebaseio.com/bestbuys.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
            console.log(val);
            listingsContainer.appendChild(createListing(val));
        });

    });
};

function createListing(listingData){
    var html = "<div class='col-md-4 col-sm-6 portfolio-item'>" +
        "<a href='#listing1' class='portfolio-link' data-toggle='modal'>" +
    "<div class='portfolio-hover'>" +
    "<div class='portfolio-hover-content'>" +
    "<i class='fa fa-home fa-3x'></i>" +
    "</div>" +
    "</div>" +
    "<img src='img/listings/1.jpg' class='img-responsive' alt=''>" +
    "</a>" +
    "<div class='portfolio-caption'>" +
    "<h4>"+listingData.title+"</h4>" +
    "<p class='text-muted'>"+listingData.description+"</p>" +
    "<p class='text-muted'>"+listingData.price+"</p>" +
    "</div>" +
    "</div>";

    var div = document.createElement('div');
    div.innerHTML = html;
    var listingElement = div.firstChild;
    return listingElement;
}

window.addEventListener('load', function() {
    getListingsFromServer();
});