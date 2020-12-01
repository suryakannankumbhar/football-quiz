// Imported
var readlineSync = require('readline-sync');
const chalk = require('chalk');



// Declarations
var incorrect = chalk.red.bold;
var correct = chalk.green.bold;
var score = 0;
var freeKickQuestion = chalk.red('FreeKick Question');



// Intro
console.log(chalk.blueBright("Welcome To" , chalk.green.bold("Footy Quiz!!!")));
console.log(chalk.red("________________________________________________"))
console.log()
var userName = readlineSync.question('May I have your name? ');
console.log(chalk.red('Hi'), userName, ", Hope You're Doing Well!!");

console.log()

// INSTRUCTIONS
console.log(chalk.blueBright.bold.underline("INSTRUCTIONS"))
console.log("1. For every correct answer 5 Points are rewarded.")
console.log("2. For every wrong answer 2 Points are deducted.")
console.log("3. You will recieve a little fact for every correct answer.")
console.log(chalk.bold("4. Play Smart!!!!"))

console.log()
console.log()

 


// play Function
function play(question,a,b,c,d,answer,fact)
{
  console.log(chalk.blueBright.bold(question))
  console.log(chalk.rgb(238,130,238)("a. "+a));
  console.log(chalk.rgb(238,130,238)("b. "+b));
  console.log(chalk.rgb(238,130,238)("c. "+c));
  console.log(chalk.rgb(238,130,238)("d. "+d));
  var userAnswer = readlineSync.question("Select your answer: ");
  if (userAnswer == answer) 
  {
    console.log(correct("Bravo!! That's Absolutely Right!!"))
    score=score+5
    console.log()
    console.log(chalk.red.bold(fact))
    console.log()
  
  }

    else{
      console.log(incorrect("Ops!! That was the wrong answer!!"))
      console.log(incorrect("The correct answer is: ")+correct(answer))
      score=score-2

    }
    console.log("Your current Score is: ",score)
    console.log()
  }





// Array of Questions
var questions = [{
  question:"1. Which  club has won most number of Champions League Trophy?",
  a: "FC Barcelona",
  b: "Juventus",
  c: "AC Milan",
  d: "Real Madrid",
  answer: 'd',
  fact:'Real Madrid has won a record 13 Champions League/European Cup Throphies. Their closest rival is AC Milan with 7.',
  },

  {
    question: "2. Who is the active top goal scorer in international football?",
    a: "Cristiano Ronaldo",
    b: "Sunil Chettri",
    c: "Lionel Messi",
    d: "Neymar Jr.",
    answer: 'a',
    fact:'Cristiano Ronaldo is the active top goal scorer in international football with 102 goals. He is just 7 goals away from becoming the top goal scorer in international football.',
  },


  {
    question: "3. Which country has won most number of World Cups?",
    a: "Germany",
    b: "Brazil",
    c: "Argentina",
    d: "England",
    answer: 'b',
    fact:'Brazil  has won the biggest prize in footballing world a record 5 times. Italy and Germany are closely following Brazil with 4 trophies each.',
  },



  {
    question: "4. 'You'll Never Walk Alone' is used by which football club?",
    a: "Liverpool",
    b: "Manchester United",
    c: "Everton",
    d: "Chelsea",
    answer: 'a',
    fact:"Anfield, Liverpool's home ground originally was home ground of the city rivals Evertorn FC, who left the stadium due to rent arguments."
  },




  {
    question: "5. Which club won the UEFA Europa League in 2020?",
    a: "Chelsea",
    b: "Inter Milan",
    c: "Sevilla",
    d: "FC Barcelona",
    answer: 'c',
    fact: "Sevilla is the most successful team in UEFA Europa League winning the competition 6 times, a competition record."
  },


  {
    question: "6. Who won the Player of the Tournament in 2018 FIFA World Cup?",
    a: "Antoine Greizmann",
    b: "Luka Modric",
    c: "Lionel Messi",
    d: "Kylian Mbappe",
    answer: 'b',
    fact:"Luka Modric signed by Real Madrid in 2012, was termed as the worst signing of the decade. He later went on to win 4 Champions League, took Croatia to world cup final and won the biggest individual award in football, Ballon d'Or."
  },



  {
    question: "7. Which is the only team to have won 3 consecutive International Trophies?",
    a: "Spain",
    b: "Argentina",
    c: "Brazil",
    d: "France",
    answer: 'a',
    fact:"Spanish national team filled with fierce rivals from Real Madrid and FC Barcelona, won the 2008 Euros, 2010 World Cup and 2012 Euros, becoming one of the greatest national teams ever."
  },




  {
    question: "8. Who was the leading goalscorer for club and country in the 2019-20 season?",
    a: "Cristiano Ronaldo",
    b: "Kylian Mbappe",
    c: "Lionel Messi",
    d: "Robert Lewandowski",
    answer: 'd',
    fact:"Robert Lewandowski scored 55 goals in 2019-20 season winning the European Golden Boot. He was front runner for winning Ballon d'Or, which was unfortunately cancelled due the pandemic."
  },




  {
    question: "9. Which club is going to change it's Stadium's name in the honor of late football legend Diego Maradona?",
    a: "FC Barcelona",
    b: "Napoli",
    c: "Boca Juniors",
    d: "Sevilla",
    answer: 'b',
    fact: "Diego Maradona has a church name after him, the 'Church of Maradona' was established by the fans in Buenos Aires in 1998. The most surprising part, though, is the fact that years are marked by Maradona’s birthday every year. The years are known as 'despues de Diego', or 'After Diego'. We are in 60 DD in 2020. "
  },





  {
    question: "10. Which player has won the most number of World Cup?",
    a: "Cristiano Ronaldo",
    b: "Maradona",
    c: "Lionel Messi",
    d: "Pelé",
    answer: 'd',
    fact:"Considered by many as the greatest of all time, Pele won his first World Cup at the age of 17, he later went on to win 2 more World Cups, taking his tally of World Cups to 3, which is highest for any individual player."
  },


]




for (var i= 0; i< questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.a,currentQuestion.b,currentQuestion.c,currentQuestion.d,currentQuestion.answer,currentQuestion.fact);
  console.log("------------------")
  console.log()
}




var highScores = [
  {
  name:'Surya',
  score:50,
  },
  {
    name:'Suraj',
    score:35,
  }
]



console.log("Current Highscorers are: ")
for(var i = 0; i<highScores.length ; i++) {
   var currentPlayer= highScores[i]
   console.log(currentPlayer.name,":",currentPlayer.score)  
}
console.log()






if (score >= 40){
  console.log(chalk.green.bold("WOW!! That was amazing!!!! You Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}
else if (score >= 25) {
  console.log(chalk.green.bold("WOW!! That was Great!!!! You Scored"),chalk.red.bold(score), chalk.green.bold("Points!! ") )

}
  
else if (score >= 10) {
  console.log(chalk.green.bold("Nice!! You palyed well!!!! You Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}
else{
  
  console.log(chalk.green.bold("Bad Luck!! Give it another Try!! Your Scored"), chalk.red.bold(score), chalk.green.bold("Points!! ") )
}

console.log()

if (score> 35) {
  console.log(chalk.red.bold("Conragtulations!! You beat Suraj."))
  console.log(chalk.bold("New Highscorers:"))
  console.log(chalk.blueBright.bold("Surya : 50"))
  console.log(chalk.blueBright.bold(userName,':',score))
}

console.log()
console.log()
console.log("***send me a screenshot on twitter if you want me to update your name.")
