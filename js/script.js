const numberKm = parseInt(prompt('Inserisci il kilometraggio da percorrere'));

console.log(numberKm);

const age = parseInt(prompt('Inserire l\'età del passeggero?'));

console.log(age);


const przKm = 0.21;
console.log(przKm);

let przTot = numberKm * przKm;
console.log(przTot);






if(age < 18){

  let sconto20 = przTot * 0.2;

  console.log(sconto20);

  przTot = (przTot - sconto20);

  console.log(przTot);

}else if(age >= 65){

  let sconto40 = przTot * 0.4;
  
  console.log(sconto40);

  przTot = (przTot - sconto40)

  console.log(przTot);

}

//output

przTot = przTot.toFixed(2);

const message ='Il prezzo del biglietto è di ' + przTot + 'euro';

console.log(message);

document.getElementById('output').innerHTML = message;

