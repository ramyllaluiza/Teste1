function menu(){
  background(imagens[0], 570, 570)
  // MENU COM TRÊS OPÇÕES
  // INICIAR JOGO
  textStyle(NORMAL);
  textAlign(LEFT)
  textSize(25)
  text("Jogar", 42, 325);
  if( mouseX >= xMenu && mouseX <= xMenu + largura && mouseY >= yMenu1 && mouseY <= yMenu1 + altura) {
  stroke(255,255,0);
  strokeWeight(2)
  fill(173,216,230);
  rect(xMenu, yMenu1, largura, altura, 15);
  fill(255,215,0);
  noStroke();
  text("Jogar", 42, 325);
  if (mouseIsPressed) {
    tela=2;
  }
   }
// INFORMAÇÕES DO JOGO
    text("Instruções", 42, 375)
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
  stroke(255,255,0);
  strokeWeight(2)
  fill(173,216,230);
  rect(xMenu, yMenu2, largura, altura, 15);
  fill(255,215,0);
  noStroke();
  text("Instruções", 42, 375)
  if (mouseIsPressed) {
    tela=3;
  }
  }
  // COLABORADORES
  text("Créditos", 42, 425)
  fill(255,215,0);
  if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura) {
  stroke(255,255,0);
  strokeWeight(2)
  fill(173,216,230);
  rect(xMenu, yMenu3, largura, altura, 15);
  fill(255,215,0);
  noStroke();
  text("Créditos", 42, 425)
  if (mouseIsPressed) {
    tela=4;
    }
  }
  }