console.log('Kintamųjų inicijavimas');

1. /*Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/


const a = 4;
console.log(a);

const b = 9;
console.log(b);

const c = 11;
console.log(c);

2. /*Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

let n1 = 'Labas';
console.log(n1);

let n2 = 'Rytas';
console.log(n2);

let n3 = 'Lietuva';
console.log(n3);

3. /*Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

let sk1 = [1, 2, 3, 4, 5]
console.log(sk1);

let sk2 = [5, 4, 3, 2, 1]
console.log(sk2);

let sk3 = [6, 5, 7, 4, 8]
console.log(sk3);

4. /*Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

let tx1 = ['as', 'ir', 'tu', 'mes', 'kartu']
console.log(tx1);

let tx2 = ['5', '4', '3', '2', '1']
console.log(tx2);

let tx3 = ['q', 'w', 'e', 'r', 't']
console.log(tx3);

console.log('---------------------------------------');

console.log('Veiksmai su kintamaisiais');

1. /*Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console*/

console.log(a, '+', b, '+', c, '=', a + b + c)

2. /*Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console*/

const nsuma = n1 + n2 + n3
console.log(n1, n2, n3);

3. /*Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console*/

console.log('1-2+3-4+5', '=', 1 - 2 + 3 - 4 + 5);


const marks = [1, 2, 3, 4, 5]
const total = marks[0] - marks[1] + marks[2] - marks[3] + marks[4];
console.log(total);

const marks1 = [5, 4, 3, 2, 1]
const total1 = marks1[0] - marks1[1] + marks1[2] - marks1[3] + marks1[4];
console.log(total1);

const marks2 = [6, 5, 7, 4, 8]
const total2 = marks2[0] - marks2[1] + marks2[2] - marks2[3] + marks2[4];
console.log(total2);

4. /*Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/


let zd = ['as', 'ir', 'tu', 'mes', 'kartu']
const sujungimas = `${zd[4]}, ${zd[3]}, ${zd[2]}, ${zd[1]}, ${zd[0]}`;
console.log(sujungimas)

let sk = ['5', '4', '3', '2', '1']
const sujungimas1 = `${sk[4]}, ${sk[3]}, ${sk[2]}, ${sk[1]}, ${sk[0]}`;
console.log(sujungimas1)

let rd = ['q', 'w', 'e', 'r', 't']
const sujungimas2 = `${rd[4]}, ${rd[3]}, ${rd[2]}, ${rd[1]}, ${rd[0]}`;
console.log(sujungimas2)

console.log('---------------------------------------');

console.log('Kintamųjų palyginimas');

console.log('------------3cio-pirmas----------------');

/*Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.*/

1. /*Tarpusavyje palyginti skaičiaus tipo kintamuosius:

a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus*/

const q = 8
const w = 3

if (q > w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (q < w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (q === w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (q !== w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (q >= w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (q <= w) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('-------------3cio-antras---------------');

/*2.Išvesti teksto tipo kintamųjų ilgius*/

const e = 'žalias'
const r = 'namas'

console.log(e.length);
console.log(r.length)

console.log('-------------3cio-trecias--------------');

/*3.Tarpusavyje palyginti teksto tipo kintamųjų ilgius:

a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus*/

if (e.length > r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (e.length < r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (e.length === r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (e.length !== r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (e.length >= r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

if (e.length <= r.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą');
}

console.log('--------3cio-ketvirtas-------------');
/* 4.Išvesti sąrašo tipo kintamųjų ilgius*/

const sarasas = ['Programavimas', 'yra', 'cool'];
    for (let i = 0; i < sarasas.length; i++) {
        console.log(sarasas[i].length);
}


console.log('--------3cio-penktas-------------');
/*
5.Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
a. kuris didesnis
b. kuris mažesnis
c. ar jie lygūs
d. ar jie nelygūs
e. kuris didesnis arba lygus
f. kuris mažesnis arba lygus*/

// a. kuris didesnis
let verte = 0;
let pozicija = 0;
for (let i = 0; i < sarasas.length; i++) { 
    if (verte < sarasas[i].length){
        verte = sarasas[i].length;
        pozicija = i+1;
    } 

} console.log(pozicija, verte);

// b. kuris mažesnis
const sarasas1 = ['Programavimas', 'yra', 'cool'];
const k = sarasas1;
if (k[0].length < k[1].length && k[0].length < k[2].length) {
    console.log(k[0].length);
} else {
    if (k[1].length < k[2].length) {
        console.log(k[1].length);
    } else {
        console.log(k[2].length);
    }   
}    

// const k = ['Programavimas', 'yra', 'cool'];
// c. ar jie lygus
if (k[0].length === k[1].length && k[0].length === k[2].length) {
    console.log('equel');
    } else {
        console.log('not equal');
}

// d. ar jie nelygus, siaip galima ir nerasyti, nes jei jie buvo tikrinti "ar lygus", tai else reiksme ismete, kad jie nelygus.

if (k[0].length !== k[1].length && k[0].length !== k[2].length){
    console.log('they are not equel');
    } else {
        console.log('equel');
}    

// const k = ['Programavimas', 'yra', 'cool'];
// e. kuris didesnis arba lygus

if (k[0].length >= k[1].length && k[0].length >= k[2].length){
    console.log(k[0].length);
    } else {
        if (k[1].length >= k[2].length){
            console.log(k[1].length);
        } else {
            console.log(k[2].length);
        }
    }    
// f. kuris mažesnis arba lygus

if (k[0].length <= k[1].length && k[0].length <= k[2].length){
    console.log(k[0].length);
    } else {
        if (k[1].length <= k[2].length){
            console.log(k[1].length);
        } else {
            console.log(k[2].length);
        }
    }    
console.log('--------4too-pirmas-------------'); 
//Ciklo for panaudojimas
/* 
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30

*/


/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.*/


function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    
    return name;
  }
console.log(getPlanetName(5));

console.log('----------possitive-sum--------');
const arr = [1, 3, 6, -4]

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(positiveSum(arr));

console.log('----------arrayMadness(a1, b1)--------');

const a1 = [4, 5, 7];
const b1 = [1, 2, 3];

function arrayMadness(a1, b1) {
    let sum2 = 0;
    let sum3 = 0;
    for (let i = 0; i < a1.length; i++) {
      sum2 += (a1[i] ** 2);
    }
    for (let i = 0; i < b1.length; i++) {
        sum3 += (b1[i] ** 3);
    } 
    if (sum2 > sum3){
        return true;
    } else {
        return false;
    }
}
console.log(arrayMadness(a1, b1));

console.log('----------correctPolishLetters (string)-------');



const string = 'Jędrzej Błądziński, Lech Wałęsa';

function correctPolishLetters (string) {
    const mapping = {
        ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
      };
      return (
        string
          .split("")
          .map(
            (char) => Object.keys(mapping).includes(char) ? mapping[char]
                : char)
          .join("")
      );
    }
console.log(correctPolishLetters(string));

console.log('----All Star Code Challenge #18----');


const str = ('Labas rytas Lietuva')
const letter = ('s')

function strCount(str, letter){
    for (let i = 0; i < str.lenth; i++){
        const value = str.split('')}
        console.log(value);
}