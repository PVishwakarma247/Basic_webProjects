let userChoice;
  let computerChoice;
  let result;
  let score;
  let scoreStr = localStorage.getItem('history');
  resetResult(scoreStr);

  function resetResult(scoreStr){
    score = scoreStr ? JSON.parse(scoreStr) : {
    Win: 0,
    Loss: 0,
    Tie: 0,
  };

  score.displayScore = function() {
    return `Win: ${score.Win} Loss: ${score.Loss} Tie: ${score.Tie}`;
  };
  
  setResult();
  }

  function scoreBoard(){
    setResult(userChoice, computerChoice, result);
  }

  function setResult(userChoice, computerChoice, result ){
    localStorage.setItem('history', JSON.stringify(score));

    document.querySelector('#user-choice').innerText = userChoice ? `You'r choice is ${userChoice}` : '';

    document.querySelector('#computer-choice').innerText = computerChoice ? `Computer's choice is ${computerChoice}` : '';

    document.querySelector('#result').innerText = result || '';

    document.querySelector('#score').innerText = score.displayScore() ;
  }

  function choice(){
    let randomValue = Math.random()*3;
    
    if(randomValue<1){
      computerChoice = 'STONE';
    }else if(randomValue<2){
      computerChoice = 'PAPER';
    }else{
      computerChoice = 'SCISSOR';
    }

  }

  function user(uc){
    if(uc === 1){
      userChoice = 'STONE';
    }else if(uc === 2){
      userChoice = 'PAPER';
    }else {
      userChoice = 'SCISSOR';
    }
    choice();
    compare();
    scoreBoard();
  }
  
  function compare(){
    if(userChoice ===computerChoice){
      score.Tie++;
      result = "It's Tie";
    }
    else if(userChoice === 'STONE'){
      if(computerChoice === 'PAPER'){
        score.Loss++;
        result = "Computer win's";
      }else if(computerChoice === 'Scissor'){
        score.Win++;
        result = "User win's";
      }
    }
    else if(userChoice === 'PAPER'){
      if(computerChoice === 'SCISSOR'){
        score.Loss++;
        result = "Computer win's";
      }else if(computerChoice === 'STONE'){
        score.Win++;
        result = "User win's";
      }
    }
    else if(userChoice === 'SCISSOR'){
      if(computerChoice === 'STONE'){
        score.Loss++;
        result = "Computer win's";
      }else if(computerChoice === 'PAPER'){
        result = "User win's";
        score.Win++;
      }
    }
  }