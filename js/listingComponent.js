/**
 * Created by angie on 7/3/17.
 */
var components=
    React.createElement('div', { class:'col-md-4 col-sm-6 portfolio-item'},
        React.createElement('a', {href: '#listing1', class:'portfolio-link'}

)
    )



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