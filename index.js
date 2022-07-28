

// Change document background color to
// silver
const body = document.body.style.backgroundColor = "#C0C0C0";
console.log(body);

// Change the font color for h1 title tag to
// green
const header = document.getElementById('title');
header.style.color="#008000";

// Change the font case for h3 title tags to
// uppercase
const elem = document.getElementsByTagName('h3');
elem.toUppercase();


// Add one more fruit to the fruits list
// Add on
let fruits = document.getElementById("fruList")
const fruit = document.createElement('li');
fruit.textContent="berry"
// fruit.innerHTML = "strawberry";
fruits.appendChild(fruit);
