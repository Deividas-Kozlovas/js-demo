let vardas = "joNaS";
let pavarde = "Petrauskas";
const asmensKodas = 38507131234;

if(validate(vardas, pavarde, asmensKodas)){
    formate(vardas,pavarde);
    let asmensKodasString = asmensKodas.toString();
    century(asmensKodasString)
    birthPlace(asmensKodasString);
}

function validate(vardas, pavarde, asmensKodas){
    let isValid = true;
    if (vardas.length <= 3){
        console.log('Vardas turi buti ilgesinis nei 3 raides');
        isValid = false;
    } else if (pavarde.length <= 5){
        console.log('Pavarde turi buti ilgesinis nei 5 raides');
        isValid = false
    }else if (asmensKodas.toString().length !== 11) {
        console.log('Asmens kodas turi buti 11 skaitmenu');
        isValid = false
    }else if (typeof asmensKodas !== 'number' || isNaN(asmensKodas) || !Number.isInteger(asmensKodas)) {
        console.log('Asmens kodas turi buti skaitmuo');
        isValid = false;
    }else{
        return isValid;
    }
}

function formate(vardas, pavarde){
    vardas = vardas.charAt(0).toUpperCase() + vardas.slice(1).toLowerCase();
    pavarde = pavarde.toUpperCase();
    console.log('Varadas: ' + vardas);
    console.log('Pavarde: ' + pavarde);
}

function century(asmensKodasString){    
    if(asmensKodasString[0] == 1 || asmensKodasString[0] == 2){
        birthYear("18", asmensKodasString)
    }else if(asmensKodasString[0] == 3 || asmensKodasString[0] == 4){
        birthYear("19", asmensKodasString)
    }else if(asmensKodasString[0] == 5 || asmensKodasString[0] == 6){
        birthYear("20", asmensKodasString)
    }else{
        console.log("Neteisingas simtmetis asmes kode");
    }
}

function birthPlace(asmensKodasString){
    switch(asmensKodasString.slice(2, 3)){
        case 1:
        case 2:
            console.log("Gimimo vieta : Lietuvoja")
            break;
        case 3:
            console.log("Gimimo vieta : uzsieni")
            break;
        default:
            console.log("Gimimo vieta nezinoma")
            break;
    }   
}

function birthYear(simtmetis, asmensKodasString){
    const gimtadienis = simtmetis + asmensKodasString.slice(1, 3) + '-' + asmensKodasString.slice(3, 5) + '-' + asmensKodasString.slice(5, 7);
    console.log('Gimimo data: ' + gimtadienis )
}
