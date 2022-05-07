/* add in your functions here */

function outputCountryBox(name, continent, cities, photos) {
    document.write('<div class="item" >');
    document.write('<h2>' + name + '</h2>');
    document.write('<p>' + continent + '</p>');
    
    outputCities(cities);
    outputPhotos(photos);
    
    document.write('<button>Visit</button>');            
    document.write('</div>');
    
    /* outputs list of cities for country */
    function outputCities(cities) {
        document.write('<div class="inner-box">');
        document.write('<h3>Cities</h3>');
        document.write('<ul>');        
        for (var i=0; i<cities.length; i++) {
            document.write('<li>' + cities[i] + '</li>');            
        }
        document.write('</ul>');
        document.write('</div>');
    }
    
    /* outputs photos for country */
    function outputPhotos(photos) {
        document.write('<div class="inner-box">');
        document.write('<h3>Popular Photos</h3>');
        for (var i=0; i<photos.length; i++) {
            document.write('<img src="../images/' + photos[i] + '" class="photo">');
        }
        document.write('</div>');        
    }

}