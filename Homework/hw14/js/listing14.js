var countries = [
    { name: "Canada",
      continent: "North America",
      cities: [
       {city: "Calgary" },
       {city: "Montreal"},
       {city: "Toronto"}]
    }, ,
    { name: "United States",
      continent: "North America",
      cities: [
       {city: "Boston" },
       {city: "Chicago" },
       {city: "New York"},
       {city: "Seattle"},
       {city: "Washington"}]
    }, 
    { name: "Italy",
      continent: "Europe",
      cities: [
       {city: "Florence" },
       {city: "Milan" },
       {city: "Naples" },
       {city: "Rome"}]
    },
    { name: "Spain",
      continent: "Europe",
      cities: [ 
       {city: "Almeria"},
       {city: "Barcelona"},
       {city: "Madrid"}]
    }

 ];
 
 function outputCountries() {
    for (i=0; i<countries.length; i++) {
       document.write(
           "<h2>" + i + countries[i].name + "</h2>" + "<p>" + countries[i].continent + "</p>");
       outputAuthors(countries[i]);
    }
 }
 
 function outputAuthors(country) {
    for (i=0; i<country.cities.length;i++) {
       document.write(
           country.cities[i].city + "<br>");
    }
 }
 
 outputCountries();