var countries = [
    { name: "Canada",
      continent: "North America",
      cities: [
       {firstName: "Mark", lastName: "Weiss" }]
    }, ,
    { name: "United States",
      continent: "North America",
      cities: [
       {firstName: "Arthur", lastName: "Keown" },
       {firstName: "John", lastName: "Martin" }]
    },
    { name: "Italy",
      continent: "Europe",
      cities: [
       {firstName: "Sylvan", lastName: "Barnet" },
       {firstName: "William", lastName: "Cain" },
       {firstName: "William", lastName: "Burto" }]
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
           country.cities[i].lastName + "<br>");
    }
 }
 
 outputCountries();