// external js: flickity.pkgd.js
(function(){ 
	
	var templateItem = document.getElementById('template').innerHTML;
	Mustache.parse(templateItem);
	var listItems = '';
		for(var i = 0; i < Data.length; i++){
		console.log(Data);
		listItems += Mustache.render(templateItem, Data[i]);
	}
		var results = document.getElementById('results');
	
		results.insertAdjacentHTML('beforeend', listItems);
	});

var flkty = new Flickity('.carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {

  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );

});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});