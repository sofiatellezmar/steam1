var fortuneDisplayElem = document.getElementById("fortuneDisplay");
var questions = document.getElementById("questions");


var traitElem= document.getElementById("trait");
var timeElem = document.getElementById("time");
var adjectiveElem = document.getElementById("adjective")
var dogElem = document.getElementById("dog")
var foodElem = document.getElementById("food")

function GuessmyAnimal() {
// Creating the "fortune" variable.
  var fortune = "";

  var Koala = 0;
  var Sloth = 0;
  var Lion = 0;
  var Panda = 0;
  var Dog = 0;
  var Wolf = 0;
  var Cat = 0;
  var BlueWhale = 0;



  var trait = traitElem.value;
if (trait == "Your big appetite" ) {  
    fortune += "+1 for Lion, Blue Whale and Panda.";
    Lion += 1;
    BlueWhale += 1;
    Panda += 1;
    
     }

  if (trait == "Your loyalty" ) {
    fortune += "+1 for Dog, Cat, and Wolf.";
    Dog += 1;
    Cat += 1;
    Wolf += 1;
    
    }
  
  if (trait == "Your laziness" ) {
    fortune += "+1 for Koala and Sloth.";
    Koala += 1;
    Sloth += 1;
    }


   var time = timeElem.value;
  if (time == "Alone" ) {
    fortune += "+1 for Koala, Panda, Sloth and Cat.";
    Koala += 1;
    Panda += 1;
    Sloth += 1;
    Cat   += 1;
    }
    
  if (time == "With others" ) {
      fortune += "+ 1 for Lion, Blue Whale, Wolf and Dog";
    Lion += 1;
    BlueWhale += 1;
    Wolf += 1;
    Dog += 1;
    
    }

     var adjective = adjectiveElem.value;
  if ( adjective == "Shy" ) {
    fortune += "+1 for Koala";
    Koala += 1;
    
    }

     if ( adjective == "Funny" ) {
    fortune += "+1 for Cat";
    Cat += 1;
    
    }

 if ( adjective == "Adventurous" ) {
    fortune += "+1 for Wolf";
    Wolf += 1;
    
    }

 if ( adjective == "Compassionate" ) {
    fortune += "+1 for Dog";
    Dog += 1;
    
    }


 if ( adjective == "Generous" ) {
    fortune += "+1 for Panda";
    Panda += 1;
    
    }

 if ( adjective == "Passionate" ) {
    fortune += "+1 for Lion";
    Lion += 1;
    
    }


 if ( adjective == "Sensible" ) {
    fortune += "+1 for Sloth";
    Sloth += 1;
    
    }

 if ( adjective == "Frank" ) {
    fortune += "+1 for Blue Whale";
    BlueWhale += 1;
    
    }


      var dog = dogElem.value;
  if (dog == "Labrador Retriever" ) {
      fortune += "+ 1 for Panda and Dog";
     
     Panda += 1;
     Dog += 1; 
      
    }

  if (time == "Pitbull" ) {
      fortune += "+ 1 for Lion and Wolf";
     Lion += 1;
     Wolf += 1;
   
      
    }

  if (time == "Pomeranian" ) {
      fortune += "+ 1 for Blue Whale and Cat";
     BlueWhale += 1;
     Cat += 1; 
      
    }

  if (time == "Chihuahua" ) {
      fortune += "+ 1 for Koala and Sloth";
     Koala += 1;
     Sloth += 1; 
      
    }
      var food = foodElem.value;
  if (food == "Pepperoni Pizza" ) {
      fortune += "+ 1 for Dog";
     Dog += 1;
      }
    
  if (food == "Ice cream and brownies" ) {
      fortune += "+ 1 for Panda";
     Panda += 1;

      }
 
  if (food == "Sushi and fried rice" ) {
      fortune += "+ 1 for Sloth";
     Sloth += 1;

      }
  
  if (food == "Tacos" ) {
      fortune += "+ 1 for Lion";
     Lion += 1;

      }
 
  if (food == "Hot Dogs and fries" ) {
      fortune += "+ 1 for Wolf";
     Wolf += 1;

      }
 
  if (food == "Chicken and Waffles" ) {
      fortune += "+ 1 for Koala";
     Koala += 1;

      }
 
  if (food == "Salmon and salad" ) {
      fortune += "+ 1 for Blue Whale";
     BlueWhale += 1;

      }

  if (food == "Chicken and Pasta") {
      fortune += "+1 for Cat";
     Cat += 1;

      }
    
  fortune += "<br>Koala Score:" + Koala;
   fortune += "<br>Sloth Score:" + Sloth;
    fortune += "<br>Wolf Score:" + Wolf;
     fortune += "<br>Cat Score:" + Cat;
      fortune += "<br>Dog Score:" + Dog;
       fortune += "<br>Panda Score:" + Panda;
        fortune += "<br>Blue Whale Score:" + BlueWhale;
         fortune += "<br>Lion Score:" + Lion;

 
  fortuneDisplayElem.innerHTML = fortune;
  
  questions.style.display = "none";
    
}        
