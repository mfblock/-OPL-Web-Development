const mkArray = ["Geel", "Rood", "Blauw", "Oranje"];

// oude manier
console.log("oude manier while")
let i = 0;
while (i < mkArray.length) {
  console.log(mkArray[i]);
  i++;
}

console.log("oude manier for")
for (let i = 0; i < mkArray.length; i++) {
  console.log(mkArray[i]);
}

// met forEach
console.log("ForEach")
mkArray.forEach((color) => console.log(color));

console.log('object mijn boot')
const mijnBoot = {
  Hull: "Blauw",
  MainSail: "Wit",
  Flag: "Rood",
  Deck: "Grijs",
  Spinacer: "Multi",
};

for (x in mijnBoot) {
  console.log(mijnBoot[x]);
}

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag? 
// > 2
// Hoeveel regels neemt mijn forEach method in beslag?
// > 1
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// > Array methode lijkt meer op python wat ik al ken
// Kun je een array method gebruiken op een object? 
// >Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
// >de de mijn boot loop
//Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren?
// >ja aan het itereren over een object