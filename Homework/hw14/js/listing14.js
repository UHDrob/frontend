var countries = [
    { name: "Canada",
      continent: "North America",
      cities: [
       {city: "Weiss" }]
    }, ,
    { name: "United States",
      continent: "North America",
      cities: [
       {city: "Keown" },
       {city: "Martin" }]
    },
    { name: "Italy",
      continent: "Europe",
      cities: [
       {city: "Barnet" },
       {city: "Cain" },
       {city: "Burto" }]
    },
    { name: "Spain",
      continent: "Europe",

    }

 ];
 
 function outputCountries() {
    for (i=0; i<countries.length; i++) {
       document.write(
           "<h2>" +  countries[i].name + "</h2>" + "<p>" + countries[i].continent + "</p>");
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