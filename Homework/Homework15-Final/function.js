document.getElementById("formId").addEventListener("submit", function(e) {
   var fieldusername = document.getElementById("username").value;
   if (fieldusername == null || fieldusername == "") {
      // the field was empty. Stop form submission
      e.preventDefault();
      // Now tell the user something went wrong
      alert("Please enter a name");
   }
     
   var fieldcountries = document.getElementById("countrieslist");
      if (fieldcountries.options[fieldcountries.selectedIndex].text == "Choose a country") {
      // the field was empty. Stop form submission
      e.preventDefault();
      // Now tell the user something went wrong
      alert("Please choose a country");	  	  
   }
   
   var statusrd1 = document.getElementById("rd1").checked;
   var statusrd2 = document.getElementById("rd2").checked;
   var statusrd3 = document.getElementById("rd2").checked;
      if (statusrd1 == false && statusrd2 == false && statusrd3 == false ){
      // the field was empty. Stop form submission
      e.preventDefault();
      // Now tell the user something went wrong
      alert("Please choose a status");	  	  
   }
});
