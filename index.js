

let userSelection = prompt("rock, paper or scissors?"); //Gets the users selection
let computerSelection = Math.random(); //Randomly generate a number                        

//Conditional logic goes here to determine the computers selection

//<--Code goes here-->
if (computerSelection < 0.34) {
  computerSelection = "rock";
} else if(computerSelection <= 0.67) {
  computerSelection = "paper";
} else {
  computerSelection = "scissors";
}
//Function to compare the userSelection and the computerSelection to determine the winner
let compare=function(selection1,selection2){
    if (selection1 == "rock" && selection2 == "scissors") {
      return "You win! Rock beats scissors";
    }else if (selection1 == "scissors" && selection2 == "paper") {
      return "You win! Scissors beats paper";    
    }else if (selection1 == "paper" && selection2 == "rock") {
      return "You win! Paper beats rock";
    }else if (selection1 == "rock" && selection2 == "paper") {
      return "You lose! Paper beats rock";
    }else if (selection1 == "scissors" && selection2 == "rock"){
      return "You lose! Rock beats scissors";
    }else if (selection1 == "paper" && selection2 == "scissors"){
      return "You lose! Scissors beats paper";
    }else if (selection1 == selection2){
      return "It's a tie!";
    }else {
      return "Something went wrong";
    }
}
 
              
console.log(compare(userSelection,computerSelection));

//above is one version, please come back in the future to write another version. Hint: using nesting. // 