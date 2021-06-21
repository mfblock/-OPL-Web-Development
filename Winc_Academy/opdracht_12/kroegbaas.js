const Age = 20
const isFemale = new Boolean(true)
const DriverStatus = 'bob'
const Naam = 'Bram'
const totalAmount = 100;

// 18+
if (Age <= 18) {
    console.log('Geen Bier voor jou')
} else {console.log("Welkom wat wil je drinken ?")}

// ladies night
if (isFemale) {
    console.log("welkom veel plezier vannavond")
} else {
    console.log("hey Kerel vannavond niet, kom je morgen ?")
}

// BOB 
if (DriverStatus == "bob") {
    console.log("Ah bob the driver")
} else {
    console.log("sleutels inleveren jij mag niet rijden")
}

// korting 50%
if (Age >= 18 && Age <= 25) {
    console.log("Je krijgt 50% korting!")
}

// ludieke actie
if (Naam == 'Bram' || Age >= 50) {
    console.log('Gratis biertje voor die ouwe')
}

// jubileum korting
if (totalAmount >= 100) {
    console.log('Gratis Champagne')
} else if (totalAmount >= 50) {
    console.log('Gratis nachos')
} else if (totalAmount >= 25) {
    console.log('Gratis (vega)bitterballen')
}