const makePizza = function() {
    console.log("bel 123 pizza, opdracht gaf niet aan welk soort pizza")
    console.log("wacht op bezorger");
    console.log("doe deur open");
    console.log("doe deur dicht");
    console.log("verslind pizza");
}
amountPizza = 2
for (var p = 0; p < amountPizza; p++) {
    console.log("order nr", p)
    makePizza()
}

const makeSushi = function () {
    console.log(" Bel SushiKing en bestel menubox 13");
    console.log(" wacht op bezorger");
    console.log(" doe deur open");
    console.log(" zoen de bezorger en grist de sushi uit z'n handen");
    console.log(" ga in je stoelzitten zet een goed film op en verorber de sushi");
}
amountSushi = 3
for (var s = 0; s < amountSushi; s++) {
    console.log("order nr", s)
    makeSushi()
}

