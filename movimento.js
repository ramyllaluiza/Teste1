function movimento(){
   if(keyIsDown(LEFT_ARROW))
        //x-=2
        if(x<=0)
          x = 0
        else
          x-=2
      
      if(keyIsDown(RIGHT_ARROW))
        //x+=2
        if(x>=550)
          x = 550
        else
          x+=2
      
      if(keyIsDown(UP_ARROW))
        //y-=2
        if(y<=0)
          y = 0
        else
          y-=2
      
      if(keyIsDown(DOWN_ARROW))
        //y+=2
        if(y>=540)
          y = 540
        else
          y+=2
      
  image(imagens2[6], x, y, 20, 40)
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
}