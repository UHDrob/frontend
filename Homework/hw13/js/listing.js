


var item1 = ["images/106020.jpg", "Girl with a Pearl Earring", 3, 80];
var item2 = ["images/116010.jpg", "Artist Holding a Thistle", 1, 125];
var item3 = ["images/120010.jpg", "Portrait of Eleanor of Toledo", 2, 75];

var image = document.createElement
var amount;  // var to hold the amount = quantiyt * price
var quantity;  // var to hold the quantity of items
var price;  // var to hold the unit price of each item




let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th' );
heading_1.innerHTML = "Product";
heading_1.colSpan = 2;

let heading_3 = document.createElement('th');
heading_3.innerHTML = "Quantity";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "Price";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "Amount";

row_1.appendChild(heading_1);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);


// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');

var img1 = document.createElement('img');
img1.src = item1[0];

let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = item1[1];
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = item1[2];
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = "$" + item1[3];
amount = item1[2] * item1[3];
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerHTML = "$" + amount + ".00";

row_2.appendChild(img1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');

var img2 = document.createElement('img');
img2.src = item2[0];

let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = item2[1];
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = item2[2];
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "$" + item2[3];
amount = item2[2] * item2[3];
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "$" + amount + ".00";

row_3.appendChild(img2);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);

// Creating and adding data to fourth row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');

var img3 = document.createElement('img');
img3.src = item3[0];

let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = item3[1];
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = item3[2];
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = "$" + item3[3];
amount = item3[2] * item3[3];
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerHTML = "$" + amount + ".00";

row_4.appendChild(img3);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);