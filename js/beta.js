
var correctAnswer = 0;
var qestion1 = prompt("Who was the first President of the United States of America?");
    if ( qestion1.toUpperCase()  === "GEORGE WASHINGTON" ) {
        correctAnswer +=1;
    }
    
var qestion2 = prompt("Name the biggest country in the World");
     if ( qestion2.toLocaleUpperCase () === "RUSSIA") {
         correctAnswer +=1;
     }
var qestion3 = prompt("What\'s the color of the sky?");
     if ( qestion3.toLocaleUpperCase () === "BLUE") {
         correctAnswer +=1;
     }
var qestion4 = prompt("The color of the snow ?");
     if ( qestion4.toLocaleUpperCase () === "WHITE") {
         correctAnswer +=1;
     }
var qestion5 = prompt("The King of Animals");
     if ( qestion5.toLocaleUpperCase () === "LION") {
         correctAnswer +=1;
     }
   
         
// output resorts 
    document.write("<h2> You have got " + correctAnswer + " from 5 qestions right </h2>");
//ranking player

if ( correctAnswer === 5 ){ 
    document.write("You reciving GOLDEN CROWN for 5 correct anwers!");
}
else if ( correctAnswer >= 3) {
    document.write("You recive SILVER CROWN");
} else if ( correctAnswer >=1) {
    document.write("You get BRONZ CROWN" )
} else if ( correctAnswer === 0)
    document.write("You got nothing !!! John Snow lol")
