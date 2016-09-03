var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

planets.map(capitalized);
console.log(planets);

planets.forEach(listPlanets);
console.log(planets);

// planets.map(capitalized);
// console.log(planets);

var ePlan = planets.filter(ePlanets);
console.log(ePlan);

function listPlanets(item) {
    el.innerHTML += item + "<br />";
    };

// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalized(item){
	for(var i = 0 ; i < planets.length ; i++){
        planets[i] = planets[i].charAt(0).toUpperCase()+ planets[i].substr(1);
    }
}
// Use the filter method to create a new array that contains planets with the letter 'e'

function ePlanets(item){
	return item.indexOf("e") !== -1;
}

// Use the reduce method to create a sentence from the words in the following array
var sentence = words.reduce(makeSentence);
console.log(sentence);
function makeSentence(a,b){
	return a + " " + b;
}