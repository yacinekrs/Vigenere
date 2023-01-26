function afficher(){
  let saisie = document.getElementById("saisie").value;
  let lower = saisie.toLowerCase()
  let outString = lower.replace(/[\s+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  document.getElementById("affiche").value = outString ;
  }


function chiffrer(){
  const DIFF_UPPER_LOW_TO_NMBR = 96;

  let brut = document.getElementById("brut").value  // let x = 'Yacineg'; 
  let taille_brut = brut.length;  // let taille_y = y.length 

  let cle = document.getElementById("cle").value; // let y = 'abc'; 
  let taille_cle = cle.length;  // let taille_x = x.length 

  let nb_repeat = Math.round(taille_brut/taille_cle); // let nb_repeat = Math.round(taille_x/taille_y);
  let cle_rep = cle.repeat(nb_repeat); // let y_rep = y.repeat(nb_repeat)
  
  const charsbrut = brut.split('');   // const chars = x.split('');
  console.log(charsbrut);// console.log(charscle);

  const charscle = cle_rep.split(''); // const charscle = y_rep.split(''); 
  console.log(charscle);   // console.log(chars);
  
  let chf = [];
  
  for (let i = 0; i < charsbrut.length ; i++ ) {

    charsbrut[i] = charsbrut[i].toLowerCase();
    charscle[i] = charscle[i].toLowerCase();
    charsbrut[i] = charsbrut[i].charCodeAt(0) - DIFF_UPPER_LOW_TO_NMBR;
    charscle[i] = charscle[i].charCodeAt(0) - DIFF_UPPER_LOW_TO_NMBR;
      
    chf[i] = (charsbrut[i] + charscle[i]) % 26;
    chf[i] = String.fromCharCode(chf[i] + DIFF_UPPER_LOW_TO_NMBR) // j ai un blem de a + y ( tous ce qui ai egale a 26)
    
  }
  console.log(charsbrut);
  console.log(charscle);
  console.log(chf);
 
  document.getElementById("affiche2").value = chf;
}
  