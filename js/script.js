var coords = [{
        name: 'Poznan',
        coords: {lat: 52.406374, lng: 16.925168}

    },
    {
        name: 'uluru',
        coords: {lat: -25.344, lng: 131.036}
    }
]
var uluru = {
    	lat: -25.344,
   		lng: 131.036
	};

window.initMap = function() {

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });

    var marker = new google.maps.Marker({
        position: coords[1].coords,
        map: map
    });

};

(function() {

    var templateItem = document.getElementById('template').innerHTML;
    Mustache.parse(templateItem);
    var listItems = '';
    for (var i = 0; i < data.length; i++) {
        listItems += Mustache.render(templateItem, data[i]);
    }
    var results = document.getElementById('results');

    results.insertAdjacentHTML('beforeend', listItems);
});

var flkty = new Flickity('.carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray(buttons);

buttonGroup.addEventListener('click', function(event) {

    if (!matchesSelector(event.target, '.button')) {
        return;
    }
    var index = buttons.indexOf(event.target);
    flkty.select(index);

});

var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});