//if else else if
function getGrade(score){
    if(score >= 90 && score <=100)  return "A";
    else if(score >=80 && score <=89 ) return "B";
        
    else   return "c"; 
}
console.log( getGrade(90));

// Rock-paper-scissors logic

function rps(user,computer){
    if(user==computer) return"Draw";
    if(user=="rock" && computer== "scissor") return "user";
     if(user=="paper" && computer== "scissor") return "computer";
      if(user=="rock" && computer== "paper") return "user";
    
      return "computer";

}

console.log(rps("scissor", "paper"));











