// Primeira avaliação
// link do video: https://youtu.be/IW6SEHW58f0
// link do código: https://editor.p5js.org/ramylla.bezerra.120/sketches/zq3dAL2eS
// Passos: Escolher uma região e movimentar-se pelo teclado até o avatar de cada estado, em seguida responder corretamente a pergunta. 

// Segunda avaliação
//link do video: https://youtu.be/4C-YSQHCd0Q
// link do código:  https://editor.p5js.org/ramylla.bezerra.120/sketches/zq3dAL2eS
var imagens = []
var imagens2 = []
var som = true
var flag = false 
var img
var x=175
var y= 490
var tela = 1
var largura = 134
var altura = 30  
var xMenu = 35
var yMenu1 = 300
var yMenu2 = 350
var yMenu3 = 400
var colide = false

function preload() {
  sound = createAudio('sons/musica.mp3')
  imgmsc = loadImage('sons/msc.jpg')
   for(i = 0; i<10; i++){
    imagens[i]= loadImage('imagens/img'+i+'.jpg')
   }
    for(i = 0; i<7; i++){
    imagens2[i]= loadImage('imagens2/img'+i+'.png')
   }
}
function setup() {
  createCanvas(570, 570)
  div=createCanvas(570, 570)
  tx = (windowWidth - width)/2;
  ty = (windowHeight - height)/2;
  div.position(tx, ty);
}
// FUNÇÃO DO SOM 
function mouseClicked() {
  if (mouseX>=490 && mouseX<=560 &&
      mouseY>=05 && mouseY<=35){
         
    if(som == true) {
      sound.stop();
      som = false;
    }
    else {
      sound.play();
      som = true;
    }
  }      
}
function draw (){
  // TELA DE MENU
  if(tela==1){
    if(flag == false){
      flag = true;
     sound.loop()
    }
    menu()  
  }
// TELA DO JOGO
  
  if(tela==2){
  regiões()
  }
  // INSTRUÇÕES DO JOGO
  
   if(tela==3){
  instrucoes()
   }
  // CRÉDITOS E COLABORADORES
  
  if(tela==4){
 créditos()
  }
  // NORTE / PERSONAGEM
  
  if(tela==5){
  personagem()
text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=10;
}
}
  }
    // NORTE - JOGO
  
   if(tela==10){
     background(imagens[3], 570, 570)
     movimento()
     
     // COLISÃO - NORTE
     
       stroke(0) 
       noFill()
    //rect(13, 230, 35, 40)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40, 13, 230, 35, 40)
      if(colide == true){
      tela=15
      }
    
       stroke(0) 
       noFill()
    //rect(140,220, 30,30)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,140, 220, 30, 30)
      if(colide == true){
      tela=18
      }
       stroke(0) 
       noFill()
     //rect(90,100, 45,40)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,90, 100, 45, 40)
      if(colide == true){
      tela=19
      }
       stroke(0) 
       noFill()
     //rect(165,40, 20,20)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,165, 40, 20, 20)
      if(colide == true){
      tela=20
      }
       stroke(0) 
       noFill()
     //rect(270,135, 30,10)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,270, 135, 30, 10)
      if(colide == true){
      tela=21
      }
      stroke(0) 
       noFill()
     //rect(280,50, 25,20)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,280, 50, 25, 20)
      if(colide == true){
      tela=22
      }
       stroke(0) 
       noFill()
     //rect(320,210, 30,30)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,320,210, 30, 30)
      if(colide == true){
      tela=23
      }
}
  // NORDESTE - PERSONAGEM
  
  if(tela==6){
  personagem()
    text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=11;
}
}
  }
  // NORDESTE - JOGO
  
   if(tela==11){
  background(imagens[4], 570, 570)
      movimento()
     
     // COLISÃO - NORDESTE 
     
      stroke(0) 
       noFill()
      //rect(415,260, 20,10)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,415,260, 20, 10)
      if(colide == true){
      tela=24
      }
      stroke(0) 
      noFill()
     // rect(380,140, 10,20)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,380,140, 10, 20)
      if(colide == true){
      tela=27
      }
       stroke(0) 
       noFill()
     // rect(460,105, 20,15)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,460,105, 20, 15)
      if(colide == true){
      tela=28
      }
      stroke(0) 
      noFill()
      //rect(420,185, 05,05)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,420,185, 05, 05)
      if(colide == true){
      tela=29
      }
      
      stroke(0) 
      noFill()
     //rect(530,210, 05,05)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,530,210, 05, 05)
      if(colide == true){
      tela=30
      }
      
      stroke(0) 
      noFill()
     //rect(495,260, 05,05)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,495,260, 05, 05)
      if(colide == true){
      tela=31
      }
     
      stroke(0) 
      noFill()
     //rect(520,240, 05,05)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,520,240, 05, 05)
      if(colide == true){
      tela=32
      }
      
      stroke(0) 
      noFill()
     //rect(540,170, 05,05)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,540,170, 05, 05)
      if(colide == true){
      tela=33
      }
      stroke(0) 
      noFill()
     //rect(505,125, 10, 20)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,505,125, 10, 20)
      if(colide == true){
      tela=34
      }
}
  // CENTRO-OESTE - PERSONAGEM
  if(tela==7){
  personagem()
      text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=12;
}
}
  }
  // CENTRO-OESTE - JOGO
  
      if(tela==12){
      background(imagens[5], 570, 570)
      movimento()
        
        // COLISÃO - CENTRO-OESTE
        
     stroke(0) 
     noFill()
     //rect(225,260, 20,25)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,225,260, 20, 25)
      if(colide == true){
      tela=35
      }
      
      stroke(0) 
      noFill()
     //rect(240,350, 40,25)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,240,350, 40, 25)
      if(colide == true){
      tela=38
      }
      stroke(0) 
      noFill()
     //rect(305,285, 10,35)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,305,285, 10, 35)
      if(colide == true){
      tela=39
      }
}
  // SUDESTE - PERSONAGEM
  
  if(tela==8){
  personagem()
text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=13
}
}
  }
  // SUDESTE - JOGO
  
    if(tela==13){
    background(imagens[6], 570, 570)
    movimento()
      
      // COLISÃO - SUDESTE
      
      stroke(0) 
      noFill()
      //rect(320,360, 25,25)
      //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,320,360, 25, 25)
      if(colide == true){
      tela=40
      }
      stroke(0) 
      noFill()
     //rect(380,310, 25,25)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,380,310, 25, 25)
      if(colide == true){
      tela=43
      }
      stroke(0) 
      noFill()
     //rect(425,410, 15,15)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,425,410, 15, 15)
      if(colide == true){
      tela=44
      }
      stroke(0) 
      noFill()
     //rect(455,360, 25,15)
     //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,455,360, 25, 15)
      if(colide == true){
      tela=45
      }
     }
  // SUL - PERSONAGEM
  
  if(tela==9){
  personagem()
      text("Voar", 320, 545)
  if(( mouseX >= 300 && mouseX <= 390) && (mouseY >= 520 && mouseY <= 550)){ 
text("Voar", 320, 545);
   if (mouseIsPressed) {
    tela=14
}
}
}
  // SUL- JOGO
  
    if(tela==14){
  background(imagens[7], 570, 570)
       movimento()
      
      // COLISÃO - SUL
      
     stroke(0) 
     noFill()
     //rect(230,460, 20,20)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,230,460, 20, 20)
      if(colide == true){
      tela=46
      }
        stroke(0) 
     noFill()
     //rect(285,410, 20,20)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,285,410, 20, 20)
      if(colide == true){
      tela=49
      }
    //rect(340,455, 20,20)
    //rect(x, y, 20, 40)
      colide = collideRectRect(x, y, 20, 40,340,455, 20, 20)
      if(colide == true){
      tela=50
      }
}
  // AQUI ESTÁ O CÓDIGO DAS PERGUNTAS
  // 1 PERGUNTA - NORTE
  
  if(tela==15){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Bahia", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Bahia", 120, 250);
   if (mouseIsPressed) {
     tela=16
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 235, 250);
   if (mouseIsPressed) {
     tela=16
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Acre", 355, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Acre", 355, 250);
   if (mouseIsPressed) {
     tela=17
}
    }
   }
  // 2 PERGUNTA - NORTE
  if(tela==18){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Rondônia", 110, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rondônia", 110, 250);
   if (mouseIsPressed) {
     tela=17
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 235, 250);
   if (mouseIsPressed) {
     tela=16
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 355, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 355, 250);
   if (mouseIsPressed) {
     tela=16
}
    }
   }
   // 3 PERGUNTA - NORTE
  if(tela==19){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Goiás", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Goiás", 120, 250);
   if (mouseIsPressed) {
     tela=16
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 225, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 225, 250);
   if (mouseIsPressed) {
     tela=16
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amazonas", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amazonas", 340, 250);
   if (mouseIsPressed) {
     tela=17
}
    }
   }
  // 4 PERGUNTA - NORTE
  if(tela==20){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 130, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 130, 250);
   if (mouseIsPressed) {
     tela=16
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Roraima", 230, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Roraima", 230, 250);
   if (mouseIsPressed) {
     tela=17
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Rondônia", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rondônia", 340, 250);
   if (mouseIsPressed) {
     tela=16
}
    }
   }
  // 5 PERGUNTA - NORTE
  if(tela==21){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 130, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 130, 250);
   if (mouseIsPressed) {
     tela=17
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 240, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 240, 250);
   if (mouseIsPressed) {
     tela=16
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 350, 250);
   if (mouseIsPressed) {
     tela=16
}
    }
   }
   // 6 PERGUNTA - NORTE
  if(tela==22){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Acre", 130, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Acre", 130, 250);
   if (mouseIsPressed) {
     tela=16
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Ceará", 240, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Ceará", 240, 250);
   if (mouseIsPressed) {
     tela=16
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 350, 250);
   if (mouseIsPressed) {
     tela=17
}
    }
   }
     // 7 PERGUNTA - NORTE
  if(tela==23){
  guardar = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Mato Grosso", 105, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Mato Grosso", 105, 250);
   if (mouseIsPressed) {
     tela=16
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Tocantins", 230, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
  text("Tocantins", 230, 250);
   if (mouseIsPressed) {
     tela=17
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Alagoas", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Alagoas", 350, 250);
   if (mouseIsPressed) {
     tela=16
}
    }
   }
  // TELA PARA ERRO DA PERGUNTA1 - NORTE
  if(tela==16){
  background(imagens2[4], 570, 570)  
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar
   }
  }
    }
 // TELA PARA ACERTO DA PERGUNTA1 - NORTE
  if(tela==17){
  background(imagens2[2], 570, 570)   
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(0,128,0)
  rect(150, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voar", 170, 475);
  if(( mouseX >= 150 && mouseX <= 240) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voar", 170, 475);
   if (mouseIsPressed) {
     x = 175
     y = 490
    tela=10
     }
   }
  }
    // 1 PERGUNTA - NORDESTE
  if(tela==24){
  guardar1 = tela
  background(imagens2[1], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Bahia", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Bahia", 120, 250);
   if (mouseIsPressed) {
     tela=26
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 235, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 355, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 355, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
  // 2 PERGUNTA - NORDESTE
  if(tela==27){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 120, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Tocantins", 230, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Tocantins", 230, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Maranhão", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Maranhão", 340, 250);
   if (mouseIsPressed) {
     tela=26
}
    }
   }
  // 3 PERGUNTA - NORDESTE
  if(tela==28){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraíba", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraíba", 120, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Ceará", 240, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Ceará", 240, 250);
   if (mouseIsPressed) {
     tela=26
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 340, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
   // 4 PERGUNTA - NORDESTE
  if(tela==29){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Acre", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Acre", 120, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Bahia", 240, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Bahia", 240, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 360, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 360, 250);
   if (mouseIsPressed) {
     tela=26
}
    }
   }
  // 5 PERGUNTA - NORDESTE
  if(tela==30){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pernambuco", 105, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pernambuco", 105, 250);
   if (mouseIsPressed) {
     tela=26
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraná", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraná", 235, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Roraima", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Roraima", 350, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
   // 6 PERGUNTA - NORDESTE
  if(tela==31){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Sergipe", 115, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Sergipe", 115, 250);
   if (mouseIsPressed) {
     tela=26
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Ceará", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Ceará", 235, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 350, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
  // 7 PERGUNTA - NORDESTE
  if(tela==32){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 115, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 115, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Alagoas", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Alagoas", 235, 250);
   if (mouseIsPressed) {
     tela=26
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amazonas", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amazonas", 340, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
  // 8 PERGUNTA - NORDESTE
  if(tela==33){
  guardar1 = tela
  background(imagens2[2], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Goiás", 115, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Goiás", 115, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 235, 250);
   if (mouseIsPressed) {
     tela=25
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraíba", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraíba", 340, 250);
   if (mouseIsPressed) {
     tela=26
}
    }
   }
   // TELA PARA ERRO DA PERGUNTA2
  if(tela==25){
  background(imagens2[5], 570, 570)  
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar1
   }
  }
    }
  // 9 PERGUNTA - NORDESTE
  if(tela==34){
  guardar1 = tela
  background(imagens2[1], 570, 570)  
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Ceará", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Ceará", 120, 250);
   if (mouseIsPressed) {
     tela=25
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(200, 225, 150, 30, 15);
  fill(0);
  noStroke();
  text("Rio Grande do Norte", 205, 250);
  if(( mouseX >= 200 && mouseX <= 350) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rio Grande do Norte", 205, 250);
   if (mouseIsPressed) {
     tela=26
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(360, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraíba", 380, 250);
  if(( mouseX >= 360 && mouseX <= 450) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraíba", 380, 250);
   if (mouseIsPressed) {
     tela=25
}
    }
   }
   // TELA PARA ERRO DA PERGUNTA2 - NORDESTE
  if(tela==25){
  background(imagens2[5], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar1
   }
  }
    }
 // TELA PARA ACERTO DA PERGUNTA2 - NORDESTE
  if(tela==26){
  background(imagens2[3], 570, 570)      
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(0,128,0)
  rect(150, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voar", 170, 475);
  if(( mouseX >= 150 && mouseX <= 240) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voar", 170, 475);
   if (mouseIsPressed) {
     x = 175
     y = 490
    tela=11
     }
   }
  }
   // 1 PERGUNTA - CENTRO OESTE
  if(tela==35){
  guardar2 = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Mato Grosso", 105, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Mato Grosso", 105, 250);
   if (mouseIsPressed) {
     tela=37
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 225, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 225, 250);
   if (mouseIsPressed) {
     tela=36
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 355, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 355, 250);
   if (mouseIsPressed) {
     tela=36
}
    }
   }
   // 2 PERGUNTA - CENTRO OESTE
  if(tela==38){
  guardar2 = tela
  background(imagens2[0], 570, 570)  
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Rondônia", 110, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rondônia", 110, 250);
   if (mouseIsPressed) {
     tela=36
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraná", 235, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraná", 235, 250);
   if (mouseIsPressed) {
     tela=36
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 145, 30, 15);
  fill(0);
  noStroke();
  text("Mato Grosso do Sul", 335, 250);
  if(( mouseX >= 330 && mouseX <= 475) && (mouseY >= 225 && mouseY <= 255)){ 
text("Mato Grosso do Sul", 335, 250);
   if (mouseIsPressed) {
     tela=37
}
    }
   }
    // 3 PERGUNTA - CENTRO OESTE
  if(tela==39){
  guardar2 = tela
  background(imagens2[0], 570, 570)  
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Mato Grosso", 105, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Mato Grosso", 105, 250);
   if (mouseIsPressed) {
     tela=36
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(215, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Pará", 245, 250);
  if(( mouseX >= 215 && mouseX <= 305) && (mouseY >= 225 && mouseY <= 255)){ 
text("Pará", 245, 250);
   if (mouseIsPressed) {
     tela=36
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Goiáis", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Goiáis", 350, 250);
   if (mouseIsPressed) {
     tela=37
}
    }
   }
   // TELA PARA ERRO DA PERGUNTA1 - CENTRO OESTE
  if(tela==36){
  background(imagens2[4], 570, 570)      
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar2
   }
  }
    }
 // TELA PARA ACERTO DA PERGUNTA1 - CENTRO OESTE
  if(tela==37){
  background(imagens2[2], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(0,128,0)
  rect(150, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voar", 170, 475);
  if(( mouseX >= 150 && mouseX <= 240) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voar", 170, 475);
   if (mouseIsPressed) {
     x = 175
     y = 490
    tela=12
     }
   }
  }
    // 1 PERGUNTA - SUDESTE
  if(tela==40){
  guardar3 = tela
  background(imagens2[1], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Rio de Janeiro", 105, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rio de Janeiro", 105, 250);
   if (mouseIsPressed) {
     tela=41
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 235, 250);
  if(( mouseX >= 225 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 235, 250);
   if (mouseIsPressed) {
     tela=42
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Piauí", 355, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Piauí", 355, 250);
   if (mouseIsPressed) {
     tela=41
}
    }
   }
  // 2 PERGUNTA - SUDESTE
   if(tela==43){
  guardar3 = tela
  background(imagens2[1], 570, 570)  
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Minas Gerais", 110, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Minas Gerais", 110, 250);
   if (mouseIsPressed) {
     tela=42
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 235, 250);
  if(( mouseX >= 225 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 235, 250);
   if (mouseIsPressed) {
     tela=41
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Maranhão", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Maranhão", 340, 250);
   if (mouseIsPressed) {
     tela=41
}
    }
   }
   // 3 PERGUNTA - SUDESTE
   if(tela==44){
  guardar3 = tela
  background(imagens2[1], 570, 570)  
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Rio de Janeiro", 105, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rio de Janeiro", 105, 250);
   if (mouseIsPressed) {
     tela=42
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraíba", 245, 250);
  if(( mouseX >= 225 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraíba", 245, 250);
   if (mouseIsPressed) {
     tela=41
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Maranhão", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Maranhão", 340, 250);
   if (mouseIsPressed) {
     tela=41
}
    }
   }
   // 3 PERGUNTA - SUDESTE
   if(tela==44){
  guardar3 = tela
  background(imagens2[1], 570, 570)  
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Rio de Janeiro", 110, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rio de Janeiro", 110, 250);
   if (mouseIsPressed) {
     tela=42
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("São Paulo", 235, 250);
  if(( mouseX >= 225 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
text("São Paulo", 235, 250);
   if (mouseIsPressed) {
     tela=41
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Sergipe", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Sergipe", 340, 250);
   if (mouseIsPressed) {
     tela=41
}
    }
   }
   // 4 PERGUNTA - SUDESTE
   if(tela==45){
  guardar3 = tela
  background(imagens2[1], 570, 570)  
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Espírito Santo", 105, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Espírito Santo", 105, 250);
   if (mouseIsPressed) {
     tela=42
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Roraima", 245, 250);
  if(( mouseX >= 225 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
text("Roraima", 245, 250);
   if (mouseIsPressed) {
     tela=41
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Tocantins", 340, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Tocantins", 340, 250);
   if (mouseIsPressed) {
     tela=41
}
    }
   }
     // TELA PARA ERRO DA PERGUNTA2 - SUDESTE
  if(tela==41){
  background(imagens2[5], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar3
   }
  }
    }
 // TELA PARA ACERTO DA PERGUNTA2 - SUDESTE
  if(tela==42){
  background(imagens2[3], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(0,128,0)
  rect(150, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voar", 170, 475);
  if(( mouseX >= 150 && mouseX <= 240) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voar", 170, 475);
   if (mouseIsPressed) {
     x = 175
     y = 490
    tela=13
     }
   }
  }
    // 1 PERGUNTA - SUL
  if(tela==46){
  guardar4 = tela
  background(imagens2[0], 570, 570)
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Goiás", 120, 250);
  if(( mouseX >= 100 && mouseX <= 190) && (mouseY >= 225 && mouseY <= 255)){ 
text("Goiás", 120, 250);
   if (mouseIsPressed) {
     tela=47
   }
    }
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(200, 225, 125, 30, 15);
  fill(0);
  noStroke();
  text("Rio Grande do Sul", 205, 250);
  if(( mouseX >= 200 && mouseX <= 325) && (mouseY >= 225 && mouseY <= 255)){ 
text("Rio Grande do Sul", 205, 250);
   if (mouseIsPressed) {
     tela=48
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraná", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Paraná", 350, 250);
   if (mouseIsPressed) {
     tela=47
}
    }
   }
      // 2 PERGUNTA - SUL
  if(tela==49){
  guardar4 = tela
  background(imagens2[0], 570, 570)  
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Santa Catarina", 105, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Santa Catarina", 105, 250);
   if (mouseIsPressed) {
     tela=47
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraná", 240, 250);
  if(( mouseX >= 215 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
  text("Paraná", 240, 250);
   if (mouseIsPressed) {
     tela=48
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Amapá", 350, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Amapá", 350, 250);
   if (mouseIsPressed) {
     tela=47
}
    }
   }
       // 3 PERGUNTA - SUL
  if(tela==50){
  guardar4 = tela
  background(imagens2[0], 570, 570)  
  textAlign(LEFT)
  textSize(14)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(100, 225, 110, 30, 15);
  fill(0);
  noStroke();
  text("Santa Catarina", 105, 250);
  if(( mouseX >= 100 && mouseX <= 210) && (mouseY >= 225 && mouseY <= 255)){ 
text("Santa Catarina", 105, 250);
   if (mouseIsPressed) {
     tela=48
   }
    }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(225, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Paraná", 240, 250);
  if(( mouseX >= 215 && mouseX <= 315) && (mouseY >= 225 && mouseY <= 255)){ 
  text("Paraná", 240, 250);
   if (mouseIsPressed) {
     tela=47
   }
  }
  textAlign(LEFT)
  textSize(15)
  stroke(0);
  strokeWeight(2)
  fill(255,250,250);
  rect(330, 225, 90, 30, 15);
  fill(0);
  noStroke();
  text("Maranhão", 345, 250);
  if(( mouseX >= 330 && mouseX <= 420) && (mouseY >= 225 && mouseY <= 255)){ 
text("Maranhão", 345, 250);
   if (mouseIsPressed) {
     tela=47
}
    }
   }
    // TELA PARA ERRO DA PERGUNTA1 - SUL
  if(tela==47){
  background(imagens2[4], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(220,20,60);
  rect(280, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voltar", 290, 475);
  if(( mouseX >= 280 && mouseX <= 370) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voltar", 290, 475);
   if (mouseIsPressed) {
    tela=guardar4
   }
  }
    }
 // TELA PARA ACERTO DA PERGUNTA1 - SUL
  if(tela==48){
  background(imagens2[2], 570, 570)     
  textAlign(LEFT)
  textSize(25)
  stroke(0);
  strokeWeight(2)
  fill(0,128,0)
  rect(150, 450, 90, 30, 15);
  fill(0);
  noStroke();
  text("Voar", 170, 475);
  if(( mouseX >= 150 && mouseX <= 240) && (mouseY >= 450 && mouseY <= 480)){ 
text("Voar", 170, 475);
   if (mouseIsPressed) {
     x = 175
     y = 490
    tela=14
     }
   }
  }
  image(imgmsc, 490, 05, 70, 30)
}
