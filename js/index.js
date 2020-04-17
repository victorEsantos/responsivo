
var mailButtonIsClicked = false;
var whatsButtonIsClicked = false;

function mostraWhats(){
  if(whatsButtonIsClicked == false){
    var divAntiga = document.querySelector("#div1");
    divAntiga.innerHTML = "<p id='div1' class='copyright'>Copyright TheDeveloper 2020. Todos os direitos reservados.<br><br><span>Fone: (47)9 9168-3207</span></p>"; 
    whatsButtonIsClicked = true;
  }
  else if(whatsButtonIsClicked == true){
    var divAntiga = document.querySelector("#div1");
    divAntiga.innerHTML = "<p id='div1' class='copyright'>Copyright TheDeveloper 2020. Todos os direitos reservados.</p>"; 
    whatsButtonIsClicked = false;
  }
}

function mostraEmail(){
  if(mailButtonIsClicked == false){
    var divAntiga = document.querySelector("#div1");
    divAntiga.innerHTML = "<p id='div1' class='copyright'>Copyright TheDeveloper 2020. Todos os direitos reservados.<br><br><span>E-mail: victor.eduardo.sntos@gmail.com</span></p>"; 
    mailButtonIsClicked = true;
  }
  else if(mailButtonIsClicked == true){
    var divAntiga = document.querySelector("#div1");
    divAntiga.innerHTML = "<p id='div1' class='copyright'>Copyright TheDeveloper 2020. Todos os direitos reservados.</p>"; 
    mailButtonIsClicked = false;
  }
}