function delete_char_spe(texte){
  return texte.replace(/[\s+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')
}

function afficher(){
  let saisie = document.getElementById("saisie").value;
  let lower = saisie.toLowerCase()
  let outString = delete_char_spe(lower)
  document.getElementById("affiche").value = outString ;
}


function chiffrer(){
  const DIFF_UPPER_LOW_TO_NMBR = 96;

  let brut =delete_char_spe(document.getElementById("brut").value);
  let taille_brut = brut.length; 

  let cle = document.getElementById("cle").value; 
  let taille_cle = cle.length;

  let nb_repeat = Math.ceil(taille_brut/taille_cle);
  let cle_rep = cle.repeat(nb_repeat);
  
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

}