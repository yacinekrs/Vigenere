DIFF_UPPER_LOW_TO_NMBR = 96;

//function pour enlever les caractere speciaux et les espaces
function delete_char_spe(texte){
  return texte.replace(/[\s+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
}

function afficher(){
  let saisie = document.getElementById("brut").value;
  let lower = saisie.toLowerCase() //toLowercase retourne le texte en miniscule 
  let outString = delete_char_spe(lower) // outstring contient la chaine finale en miniscule sans charactere speciaux et sans 
  document.getElementById("affiche2").value = outString ;
}

function chiffrer(){
  let brut =delete_char_spe(document.getElementById("brut").value);
  let taille_brut = brut.length; 

  let cle = delete_char_spe(document.getElementById("cle").value); 
  let taille_cle = cle.length;

  // on devise la taille du texte sur la taille de la cle pour savoir combien de fois repeter la clé
  let nb_repeat = Math.ceil(taille_brut/taille_cle);
  let cle_rep = cle.repeat(nb_repeat);
  
  //la methode split dans notre cas elle permet de remplir un tableau caractere par caractere
  const tab_brut = brut.toLowerCase().split('');
  const tab_cle = cle_rep.toLowerCase().split(''); 
  let chf = [];
  
  //dans cette on transforme chaque lettre par le nombre qui lui correspond avec l'aide du code ascii
  //on soustrait la difference entre le code ascii de la lettre et celui du chiffre qui est 96
  for (let i = 0; i < tab_brut.length ; i++ ) {
    tab_brut[i] = tab_brut[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
    tab_cle[i] = tab_cle[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
    
    //dans cette condition on traite les cas du Z car la valeur de c'est 26 et 26 mod 26 est egale a zero
    //et 0 n'est pas equivalent a Z donc on le remet a 26
    chf[i] = (tab_brut[i] + tab_cle[i]) % 26; 
    chf[i] === 0 ? chf[i] = 26 : chf[i] = chf[i];
    chf[i] = String.fromCharCode(chf[i] + DIFF_UPPER_LOW_TO_NMBR) ;
  }
  document.getElementById("affiche2").value = chf.join("");
}

//pour le dechiffrement on a prit le meme principe que pour le chiffrement 
//mais au lieu de faire l'addition on fait la soustraction
function dechiffrer(){
  let brut = delete_char_spe(document.getElementById("brut").value);
  let taille_brut = brut.length; 

  let cle = delete_char_spe(document.getElementById("cle").value); 
  let taille_cle = cle.length;

  let nb_repeat = Math.ceil(taille_brut/taille_cle);
  let cle_rep = cle.repeat(nb_repeat);

  const tab_brut = brut.toLowerCase().split('');
  const tab_cle = cle_rep.toLowerCase().split('');

  let chf = [];

  for (let i = 0; i < tab_brut.length ; i++ ) {
    tab_brut[i] = tab_brut[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
    tab_cle[i] = tab_cle[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
      
    chf[i] = ((tab_brut[i] - tab_cle[i]) % 26);
    chf[i] === 0 ? chf[i] = 26 : chf[i] = chf[i];
    chf[i] <= 0 ? chf[i] += 26 : chf[i] = chf[i];//cette condition c'est pour traiter quand la soustraction est negative donc on ajoute 26
    chf[i] = String.fromCharCode(chf[i] + DIFF_UPPER_LOW_TO_NMBR) ;
  }
  document.getElementById("affiche2").value = chf.join("")
}

function nmbr_occ(){
  let chaine = delete_char_spe(document.getElementById("brut").value);
  let reponse = document.getElementById("reponse");
  let len = chaine.length;
  let seq = []; let rep = []; let tab = []; let tab2 = []; let dist = []; let div = [];
  let str = '';
  let n = 3;
  while(n <= (len/2)){
    for (let i = 0; i < len - n + 1; i++){
      rep.push(chaine.substring(i, i + n));
      if (!seq.includes(chaine.substring(i, i+n))){
        seq.push(chaine.substring(i, i + n));
      }
    }
    n++;
  }
  seq.map(elem => {
      const occ = rep.filter(elem2 => elem === elem2)
      if (occ.length > 1){
        str +=`le nombre d\'occurence ${elem}  est ${occ.length} <br>`;
        tab.push(elem);
      }})
    reponse.innerHTML = str;

      for (let i = 0; i < tab.length; i++){
        tab2 = chaine.split(tab[i])
        console.log(tab2)
        for (let x = 1; x <tab2.length - 1; x++){
          dist.push(tab2[x].length + tab[i].length )
        }
      }
      console.log(dist)
      for (let i = 0; i < dist.length; i++){
        div = div.concat(diviseur(dist[i])); 
      }
      console.log(div)
      str +=`<br> la taille la plus propabe de cle est ${compter(div)}`;
      reponse.innerHTML = str;
      let count = dictionnaire(div);
      console.log(count); 
      let supp =supp_moin_probable(count)
      console.log(supp)
}

function diviseur(entier){
  let tab = []
  for (let i = 2; i <= entier; i++){
    if (entier%i === 0){
      tab.push(i);
    } 
  }
  return tab;
}

function compter(div){
  let cmp = 0;
  let nmbr_rep = 0;
  let elem = 0;
  for (let i = 0; i < div.length; i++){
    for (let j = 0; j < div.length; j++){
      if(div[i] === div[j]){
        cmp++;
      }
      if (cmp > nmbr_rep ){
        nmbr_rep = cmp;
        elem = div[i];
      }
      cmp = 0;
    }
  }
  return elem
}

function dictionnaire(div){
  let count = {};
  for (let i = 0; i < div.length; i++) {
      let num = div[i];
      count[num] = (count[num] || 0) + 1;
  }
return count
}

// EXO8 
function supp_moin_probable(count){
let rep =  Object.keys(count).length * 0.1 ;
for(let i = 1; i <= Math.ceil(rep); i++){
    let array = Object.entries(count);
    array.sort(function(a, b) {
    return a[1] - b[1];});
  let smallest = array.shift();
  delete count[smallest[0]];
    }
  return count

}

function Exo910(){
  let exo = document.getElementById("exo");
  let reponse = `<h1> Exercice 09 </h1> 
  <p>Si le texte Tr est généré aléatoirement en utilisant seulement des minuscules, 
  la probabilité Kr que deux lettres choisies aléatoirement soient égales est de 1/26, 
  car il y a 26 lettres minuscules possibles.<br><br>
  Formellement, si n est la taille du texte Tr, la probabilité Kr est donnée par : Kr = 1/26
  </p>
  <h1> Exercice 10 </h1>
  <p>Cette différence est due à la répartition des fréquences des différentes lettres dans un texte rédigé en anglais. 
  En anglais, certaines lettres apparaissent plus fréquemment que d'autres, ce qui change la probabilité que deux lettres 
  choisies aléatoirement soient égales. 
  Par exemple, les lettres E, T et A apparaissent souvent dans le texte anglais, ce qui augmente la probabilité 
  que deux lettres choisies aléatoirement soient égales.</p>
  `
  exo.innerHTML = reponse
}
