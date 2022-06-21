const input = '3638931607293010019628996625430456522071450132747145313435672115022776518676449096176345218760141531480989096024742289387408160762194216522836592594473421';

function pairCont(str) {
    const ats = Array(100).fill(0);
    for (let i = 0; i < str.length; i++){
        const previous = str[i];
        const next = str[i+1];
        const index = parseInt(previous + next);
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