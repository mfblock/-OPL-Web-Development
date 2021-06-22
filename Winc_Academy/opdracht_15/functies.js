// eigen test
const makePizza = function(soort) {
    console.log("bel 123 pizza, bestel:", soort);
};

makePizza("vesuvio");

// deel 1

const PaintWall = function() {
    console.log("The wall has been painted red");
};

PaintWall();

//deel 2
const PaintWallColor = function(color) {
    console.log("The wall has been painted", color)
}

PaintWallColor("Groen")

const PaintObjectColor = function(object_name, color) {
    console.log("The ", object_name ,  'has been painted', color);
}

PaintObjectColor('desk', 'blue');