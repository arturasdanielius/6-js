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
