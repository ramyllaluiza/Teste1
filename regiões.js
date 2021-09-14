function regiões(){
  background(imagens[8], 570, 570)
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220);
  rect(450, 480, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 460, 505);
  if(( mouseX >= 450 && mouseX <= 540) && (mouseY >= 480 && mouseY <= 510)){ 
text("Voltar", 460, 505);
   if (mouseIsPressed) {
    tela=1;
   } 
   }
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(34,139,34);
  rect(100, 115, 90, 30, 15);
  fill(0);
  noStroke();
  text("Norte", 115, 138);
    if(( mouseX >=100 && mouseX <=190) && (mouseY >= 115 && mouseY <= 145)){ 
text("Norte", 115, 138);
   if (mouseIsPressed) {
    tela=5;
   }
    }
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(30,144,255);
  rect(430, 120, 119, 30, 15);
  fill(0);
  noStroke();
  text("Nordeste", 440, 145);
    if(( mouseX >=430 && mouseX <=549) && (mouseY >= 120 && mouseY <= 150)){ 
text("Nordeste", 440, 145);
   if (mouseIsPressed) {
    tela=6;
   }
    }
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(255,0,255);
  rect(200, 300, 170, 30,15);
  fill(0);
  noStroke();
  text("Centro-Oeste", 210, 325);
    if(( mouseX >=200 && mouseX <=370) && (mouseY >= 300 && mouseY <= 330)){ 
text("Centro-Oeste", 210, 325);
   if (mouseIsPressed) {
    tela=7;
  }
    }
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(255,0,0);
  rect(380, 380, 110, 30, 15);
  fill(0);
  noStroke();
  text("Sudeste", 390, 405);
    if(( mouseX >=380 && mouseX <=490) && (mouseY >= 380 && mouseY <= 410)){ 
text("Sudeste", 390, 405);
   if (mouseIsPressed) {
    tela=8;
   }
    }
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(255,215,0);
  rect(280, 480, 58, 30,15);
  fill(0);
  noStroke();
  text("Sul", 290, 505);
    if(( mouseX >=280 && mouseX <=338) && (mouseY >= 480 && mouseY <= 510)){ 
text("Sul", 290, 505)
   if (mouseIsPressed) {
    tela=9;
   }
    }
}