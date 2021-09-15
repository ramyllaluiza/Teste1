function créditos(){
  background(imagens[2], 570, 570)
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(173,216,230);
  rect(450, 520, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 465, 545);
  if(( mouseX >= 450 && mouseX <= 540) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voltar", 465, 545);
   if (mouseIsPressed) {
    tela=1;
   }
  }
}