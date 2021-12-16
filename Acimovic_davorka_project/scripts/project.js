    // Player name
    var player1 = "You";
    var player2 = "Computer";
    let scoreThisRound1;
    let scoreThisRound2;
    let total1 = 0;
    let total2 = 0;
    const thisRound1    = document.getElementById("this-round1");
    const thisRound2    = document.getElementById("this-round2");
    const scoreTotla1   = document.getElementById("total-score1");
    const scoreTotla2   = document.getElementById("total-score2");
    let rollCounter = 0;
    let popupAnimationHandler;
    let opacityValue = 0;
    //get the pop-up element
    const popUp = document.getElementById("pop-up");
    //POPUP
    /*
    allow user to close and hide the popup after they have seen it
    */
    const closePopup = document.getElementById("btn-close");
    closePopup.addEventListener("click", function(){
        popUp.style.opacity = "0";
    });
  

 



    //console.log("Stojan") ;
    function okreniKocke() {
            let randomNumber1 = Math.floor(Math.random() * 6) + 1;
            let randomNumber2 = Math.floor(Math.random() * 6) + 1;
            let randomNumber3 = Math.floor(Math.random() * 6) + 1;
            let randomNumber4 = Math.floor(Math.random() * 6) + 1;

            rollCounter++;
            if(randomNumber1 == 1 || randomNumber2 == 1 ){
                scoreThisRound1 = 0;
            } else scoreThisRound1 = randomNumber1 + randomNumber2;
            if(randomNumber3 == 1 || randomNumber4 == 1 ){
                scoreThisRound2 = 0;
            } else scoreThisRound2 = randomNumber3 + randomNumber4;
            if(randomNumber1 == randomNumber2){
                scoreThisRound1 = 2*scoreThisRound1;
            }
            if(randomNumber3 == randomNumber4){
                scoreThisRound2 = 2*scoreThisRound2;
            }
            console.log (scoreThisRound1);
            console.log (scoreThisRound2);
            thisRound1.innerHTML = `Score This Round: ${scoreThisRound1}`;
            thisRound2.innerHTML = `Score This Round: ${scoreThisRound2}`;
            
            console.log ("scoreThisRound1 " + scoreThisRound1);
            console.log ("scoreThisRound2 " + scoreThisRound2);

            total1 += scoreThisRound1;   
            console.log ("total1 " + total1);
            scoreTotla1 .innerHTML = `Total Score: ${total1}`;
    
            total2 += scoreThisRound2;   
            console.log ("total2 " + total2);
            scoreTotla2 .innerHTML = `Total Score: ${total2}`;
    

            document.querySelector(".img1").setAttribute("src",
                "images/dice" + randomNumber1 + ".png");

            document.querySelector(".img2").setAttribute("src",
                "images/dice" + randomNumber2 + ".png");
            
            document.querySelector(".img3").setAttribute("src",
                "images/dice" + randomNumber3 + ".png");
            
            document.querySelector(".img4").setAttribute("src",
                "images/dice" + randomNumber4 + ".png");

            if(rollCounter > 2){
                disableBtn();
                if (total1 === total2) {
                    document.querySelector("h2").innerHTML = "Draw!";
                }
    
                else if (total1 < total2) {
                    document.querySelector("h2").innerHTML
                                    = (player2 + " WINS!");
                }
    
                else {
                    document.querySelector("h2").innerHTML
                                    = (player1 + " WIN!");
                }
               // popUp.style.opacity = "1";
               /*
                an animation for fading in the opacity
                */
                requestAnimationFrame( fadeIn );
                }
            
            
    }
    // Function to roll the dice
    function rollTheDice() {
        //console.log ("Stojan3");
  
        setTimeout(okreniKocke, 600);
        //console.log ("scoreThisRound1 " + scoreThisRound1);

    }
    // Function disable
    function disableBtn() {
        document.getElementById("new-game").disabled = true;
      }



    // Function to start new game
    function newGame(){
        rollCounter = 0;
        scoreThisRound1 = 0;
        scoreThisRound2 = 0;
        total1 = 0;
        total2 = 0;
        thisRound1.innerHTML = `Score This Round: ${scoreThisRound1}`;
        thisRound2.innerHTML = `Score This Round: ${scoreThisRound2}`;
        scoreTotla1 .innerHTML = `Total Score: ${total1}`;
        scoreTotla2 .innerHTML = `Total Score: ${total2}`;
        document.getElementById("new-game").disabled = false;
        document.querySelector(".img1").setAttribute("src",
                "images/dice1.png");

            document.querySelector(".img2").setAttribute("src",
                "images/dice1.png");
            
            document.querySelector(".img3").setAttribute("src",
                "images/dice1.png");
            
            document.querySelector(".img4").setAttribute("src",
                "images/dice1.png");
        popUp.style.opacity = "0";
        opacityValue = 0;
    }
    
    function fadeIn(){
        opacityValue = opacityValue + .05;
        if(opacityValue <= 1){
            popUp.style.opacity = opacityValue;
            requestAnimationFrame( fadeIn );
        }else{
            popUp.style.opacity = 1;
        }    
    }
