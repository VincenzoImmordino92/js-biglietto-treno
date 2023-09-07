const numberKm = parseInt(prompt('Inserisci il kilometraggio da percorrere'));

console.log(numberKm);

const age = parseInt(prompt('Inserire l\'età del passeggero?'));

console.log(age);


const przKm = 0.21;
console.log(przKm);

let przTot = numberKm * przKm;
console.log(przTot);



let przkmScontato20 = przTot * 0.8;
console.log(przkmScontato20);

let przkmScontato40 = przTot * 0.6;
console.log(przkmScontato40);


if(age < 18){
przTot = (przTot - przkmScontato20)
console.log(przTot - przkmScontato20);
}else if(age >= 65){
przTot =(przTot - przkmScontato40)
console.log(przTot - przkmScontato20);

}

//output

przTot = przTot.toFixed(2);

const message ='Il prezzo del biglietto è di ' + przTot + 'euro';

console.log(message);

document.getElementById('output').innerHTML = message

