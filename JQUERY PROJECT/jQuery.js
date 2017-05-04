var playing = false;
var score;
var trails;
var step;
var action;
var fruits = ['apple', 'Bannanas' , 'Cherries' , 'peeach' , 'mango', 'orange', 'Pineapple', 'Watermelon', 'lemon'];
$(function(){
   $("#start").click(function(){
 if(playing == true){
     location.reload();
 }    else{
     playing = true;
 $("#start").html("Reset Game");
     score = 0;
     $("#scorecount").html(score);
      $("#trails").show();
     trails = 3;
  addHearts();
     $("#gameover").hide();
     startaction();
 }
       
       
       
        }); 
    $("#fruits").mouseover(function(){
        score++;
        $("#scorecount").html(score);
       $("#fruits").hide("explode", 500);
        setTimeout(startaction, 500);
    });

function addHearts(){
    $("#trails").empty();
    for(i = 0; i<trails; i++){
         $("#trails").append('<img src="images/hearts.png" class="h">');
     }
    
}
function startaction(){
   $("#fruits").show();
    chooseFruits();
    $("#fruits").css({'left' : Math.round(550*Math.random()), 'top': -100});
    
    step = 1+Math.round(5*Math.random());
    action = setInterval(function(){
        $("#fruits").css('top', $("#fruits").position().top + step);
        if($("#fruits").position().top > $("#con1").height()){
            if(trails > 1 ){
                $("#fruits").show();
    chooseFruits();
    $("#fruits").css({'left' : Math.round(500*Math.random()), 'top': -50});
    
    step = 1+Math.round(5*Math.random());
                trails--;
                addHearts();
                
            }else{
                playing = false;
                $("#gameover").show();
                $("#start").html("Start Game")
                $("#gameover").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trails").hide();
           
                    stopAction();   
                    
            }
        }
    }, 30);
}

function chooseFruits(){
    $("#fruits").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] + '.png');
}
function stopAction(){
    clearInterval();
    $("#fruits").hide();
}
        });