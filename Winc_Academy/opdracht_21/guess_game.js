let randomNumber = Math.floor(Math.random() * 25) + 1;
const welkom = document.querySelector('.welkom')
const pogingen = document.querySelector('.pogingen');
const LaatstePoging = document.querySelector('.LaatstePoging');
const HoogLaag = document.querySelector('.HoogLaag');
const PogingWagen = document.querySelector('.PogingWagen');
const PogingInput = document.querySelector('.PogingInput');

let PogingTeller = 1;
let resetButton;

var InputNaam = prompt("We gaan een spelletje spelen, hoe heet je ", "Nobody");

welkom.textContent = 'Welkom ' + InputNaam + '!'

var MaxPoging = prompt("in hoeveel beuren wil je het getal raden", 5);

function CheckPoging() {
    let Poging = Number(PogingInput.value);
    if (PogingTeller == 1) {
        pogingen.textContent = 'Vorige pogingen: ';
    }

    pogingen.textContent += Poging + ' ';

    if (Poging == randomNumber) {
        LaatstePoging.textContent = 'Goed gegokt ' + InputNaam +  ', je verdient eeuwige roem';
        LaatstePoging.style.backgroundColor = 'green';
        HoogLaag.textContent = '';
        EindeSpel();
    } else if (PogingTeller === MaxPoging) {
        LaatstePoging.textContent = '!!! Verloren !!! het spel is afgelopen. Dag' + InputNaam + '!';
        HoogLaag.textContent = '';
        EindeSpel();
    } else {
        LaatstePoging.textContent = 'Fout!';
        LaatstePoging.style.backgroundColor = 'red';
        if (Poging < randomNumber) {
            HoogLaag.textContent = 'Te laag';
        } else if (Poging > randomNumber) {
            HoogLaag.textContent = 'Te hoog !';
        }
    }
    PogingTeller++;
    PogingInput.value = '';
    PogingInput.focus();
}

PogingWagen.addEventListener('click', CheckPoging);

function EindeSpel() {
    PogingInput.disabled = true;
    PogingWagen.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start nieuw spel';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', HerstartSpel);
}

function HerstartSpel() {
    PogingTeller = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    PogingInput.disabled = false;
    PogingWagen.disabled = false;
    PogingInput.value = '';
    PogingInput.focus();
    LaatstePoging.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

