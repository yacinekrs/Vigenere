DIFF_UPPER_LOW_TO_NMBR = 96;

//function pour enlever les caractere speciaux et les espaces
function delete_char_spe(texte){
  return texte.replace(/[\s+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
}

function afficher(){
  let saisie = document.getElementById("saisie").value;
  let lower = saisie.toLowerCase() //toLowercase retourne le texte en miniscule 
  let outString = delete_char_spe(lower) // outstring contient la chaine finale en miniscule sans charactere speciaux et sans 
  document.getElementById("affiche").value = outString ;
}

function chiffrer(){
  let brut =delete_char_spe(document.getElementById("brut").value);
  let taille_brut = brut.length; 

  let cle = delete_char_spe(document.getElementById("cle").value); 
  let taille_cle = cle.length;

  // on devise la taille du texte sur la taille de la cle pour savoir combien de fois repete la clé
  let nb_repeat = Math.ceil(taille_brut/taille_cle);
  let cle_rep = cle.repeat(nb_repeat);
  
  //la methode split dans notre cas elle permet de remplir un tableau caractere par caractere
  const tab_brut = brut.toLowerCase().split('');
  const tab_cle = cle_rep.toLowerCase().split(''); 
  let chf = [];
  
  for (let i = 0; i < tab_brut.length ; i++ ) {
    tab_brut[i] = tab_brut[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
    tab_cle[i] = tab_cle[i].charCodeAt() - DIFF_UPPER_LOW_TO_NMBR;
      
    chf[i] = (tab_brut[i] + tab_cle[i]) % 26;
    chf[i] === 0 ? chf[i] = 26 : chf[i] = chf[i];
    chf[i] = String.fromCharCode(chf[i] + DIFF_UPPER_LOW_TO_NMBR) ;
  }
  document.getElementById("affiche2").value = chf.join("");
}

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
    chf[i] <= 0 ? chf[i] += 26 : chf[i] = chf[i];
    console.log(chf);
    chf[i] = String.fromCharCode(chf[i] + DIFF_UPPER_LOW_TO_NMBR) ;
  }
  document.getElementById("affiche2").value = chf.join("")
}

function nmbr_occ(){
  let chaine = delete_char_spe(document.getElementById("brut").value);
  let len = chaine.length;
  let seq= [];
  let rep = [];

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
        console.log(`le nombre d\'occurence ${elem} est :${occ.length}`)
      }
  })
  alert("veuillez voir la console pour le resultat")
}