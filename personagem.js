function personagem(){
 background(imagens[9], 570, 570)
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(173,216,230);
  rect(460, 520, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 470, 545);
  if(( mouseX >= 460 && mouseX <= 550) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voltar", 470, 545);
   if (mouseIsPressed) {
    tela=2;
   }
}
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(173,216,230);
  rect(300, 520, 90, 30, 15)
  fill(0);
  noStroke();
  }
/* text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=
}
}
*/