function afficher(){
  var saisie = document.getElementById("saisie").value;
  var lower = saisie.toLowerCase()
  var outString = lower.replace(/[\s+`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  document.getElementById("affiche").value = outString ;
  }


function chiffrer(){
  const DIFF_UPPER_LOW_TO_NMBR = 96;

  var brut = document.getElementById("brut").value
  var brutLow = brut.toLowerCase();
  var ascii_code_brut = brutLow.charCodeAt(0) - DIFF_UPPER_LOW_TO_NMBR;

  var cle = document.getElementById("cle").value;
  var cleLow = cle.toLowerCase();
  var ascii_code_cle = cleLow.charCodeAt(0) - DIFF_UPPER_LOW_TO_NMBR;


  var chiffr = ascii_code_cle + ascii_code_brut;
  
  const charsbrut = brutLow.split('');
  console.log(charsbrut);

  const charscle = cleLow.split('');
  console.log(charscle);

  // let x = 'Yacinebg'; 
  // let y = 'abc'; 
  
  // let taille_x = x.length  
  // let taille_y = y.length  
  
  // let nb_repeat = Math.round(taille_x/taille_y);
  // console.log("nombre de  repretition ",nb_repeat);
  // let y_rep = y.repeat(nb_repeat)
  
  // const chars1 = y_rep.split('');
  // console.log(chars1);
  
  // const chars = x.split('');
  // console.log(chars);
  
  // let chf = [];
  
  // for (let i = 0; i < chars.length ; i++ ) {
  //     chars[i] = chars[i].toLowerCase();
  //     chars1[i] = chars1[i].toLowerCase();
  //     chars[i] = chars[i].charCodeAt(0) - 96;
  //     chars1[i] = chars1[i].charCodeAt(0) - 96;
      
  //     chf[i] = (chars[i] + chars1[i]) % 27;
  //     chf[i] = String.fromCharCode(chf[i] + 96)
  // } 
  // console.log(chars);
  // console.log(chars1);
  // console.log(chf);
 
  document.getElementById("affiche2").value = chiffr;
}
  