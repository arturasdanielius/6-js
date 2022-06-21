console.log('----Vardo-raidziu-dazniausios-poros-(string)----');

const input = '3638931607293010019628996625430456522071450132747145313435672115022776518676449096176345218760141531480989096024742289387408160762194216522836592594473421';


function pairCont(str) {
    const ats = Array(100).fill(0);
    for (let i = 0; i < str.length; i++){
        const current = str[i];
        const next = str[i+1];
        const index = parseInt(current + next);
        ats[+index]++; 
    }
    return ats;
}

function max(list) {
    const biggest = list.sort ((a, b) => b - a)[0];
    const ats = [];
    for (let i = 0; i < list.length; i++){
        if(list[i] === biggest){
            ats.push(i);
        }
    }return ats
}


const pairs = pairCont(input)
console.log(pairs);
console.log(pairs.sort((a, b) => a - b));


console.log(pairCont(input));

/*
Jevgenijaus sprendimas 

function splitas(input){
    let mas = input.split('');
    let pair =mas[0]; 
    let masyvas=[];
    for ( i= 0; i < mas.length; i++){
        pair = mas[i] + mas[i+1];
        masyvas.push(pair);
    }
    const biggest = masyvas.sort((a, b) => b - a);
    let a = biggest[1];
    let b = 1;
    bmax = -Infinity;
    amax = 0;
    for (n = 0; n <biggest.length; n++){
        if(biggest[n] === biggest[n+1]){
            a= biggest[n];
            b++;
        } else{
            a = biggest[n];
            b = 1;
        }
        if( bmax < b){
            bmax = b;
            amax = a;
        }
    }
    return `Skaičius ${amax} ir jis kartojasi ${bmax} kartus`;
}

console.log(splitas(input));*/