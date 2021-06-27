// hello kiddo
let  age = 15
let welcome = (age >= 18) ? () => console.log("Hello there"): () => console.log("Hey kiddo");

welcome();

// VAT #1

let baseprice = 1000;
let VAT = 0.21;

const totalvat = function (b) {
    bp_vat = baseprice + b;
    return bp_vat;
}

const basevat = function (a, b) {
    vat = a * b;
    inclvat = totalvat(vat);
    return inclvat;
}

console.log(basevat(baseprice,VAT))

// VAT #2:
// VAT #1

let basis_prijs = 1000;
let BTW_percentage = 0.21;

const totalvatb = function (b) {
    bp_vat = basis_prijs + b;
    return bp_vat;
}

const base_vat = function (a, b) {
    vatb = a * b;
    inclvatb = totalvatb(vat);
    return [inclvat,vat];
}

vat_info = base_vat(basis_prijs,BTW_percentage);
console.log(vat_info[0]);
console.log(vat_info[1]);