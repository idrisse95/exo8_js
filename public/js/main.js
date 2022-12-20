





// exo1 bonus

let jour = parseInt(prompt('entrez un jour'))
switch (jour){
    case 1:
        alert('Lundi');
        break;
    case 2:
        alert('Mardi');
        break;
        
    case 3:
        alert('Mercredi')
        break;

    case 4:
        alert('jeudi');
        break;
            
    case 5:
         alert('vendd');
         break;
    
    case 6:
        alert('smdi');
        break;

    case 7:
        alert ('dim');
        break;

    default:
        alert('entre 1 et 7')

}










// exo2bonus

let mois = parseInt(prompt('mois?'))
switch (mois){
    case 1:
        alert('janvier');
    break;
    case 2:
        alert('fev');
    break;
    case 3:
        alert('mars');
    break;
    case 4:
        alert('avril');
    break;
    case 5:
        alert('mai');
    break;
    case 6:
        alert('juin');
    break;
    case 7:
        alert('juill');
    break;
    case 8:
        alert('aout');
    break;
    case 9:
        alert('sept');
    break;
    case 10:
        alert('oct');
    break;
    case 11:
        alert('nov');
    break;
    case 12:
        alert('Dec');

}



// exo 3 bonus

let note = parseInt(prompt('note?'))
switch (note){
    case 100:
        alert('A');
    break;
    case 90:
        alert('B');
    break;
    case 80:
        alert('C');
    break;
    case 70:
        alert('D');
    break;
    case 60:
        alert('E');
    break;
    case 50:
        alert('F');
    default:
        alert('c mort')
}



// exo4 bonus

let caract = prompt("entrer une lettre")
switch (caract){
    case "a","e","u","i","o":
        alert('voyelle');
        break;
    default:
        alert('consome')
}


// exo5bonus


let posi = parseInt(prompt('entrer un nb'))
switch(true){
    case posi>=0:
        alert('positif')
    break;
    default:
        alert('nega')
   
}


// exo6 bonus

let maj = prompt('entre une lettre')
switch(maj){
    case "A","B","C","D","E":
        alert('uppercase');
        break;
    case "a","b","c":
        alert('lower')
    default:
        alert('entre de A à F')
}


// exo7 bonus

let s = prompt('entre un mot')
let rev = s.split('').reverse().join('');

switch(true){
    case s == rev:
alert('oui');
default:
    alert('non')}






















// EXOOO 2

let meteo = prompt('meteo?')
switch(meteo){
    case "chaud":
    alert('fait chaud waw');
    break;
    case "pleut:":
    alert('auy il pleut habille toi chaud');
    break;
    case "neige":
        alert('il neige oups')
        break;
}





// EXOOO 3

let deux = +prompt('entre un nb?')
switch (true){
    case deux % 2 == 0:
        alert('oui')
        break;
    default:
        alert('non')
    }


// EXXOO 4

let n1 = +prompt('entre nb1')
let ope = prompt('operateur?')
let n2 = +prompt('entre nb2')

switch(ope){
    case "+":
        alert(n1+n2) ;
        break;
    case "-":
        alert(n1-n2);
        break;
        case "*":
            alert(n1*n2) ;
            break;
        case "/":
            alert(n1/n2);
            break;
    
}