  const main = document.querySelectorAll('.child') ;


const compChoice = () => {
    let compArr = ['Rock' , 'Paper' , 'Sciccors'] ;
    const C_choice = Math.floor(Math.random() * compArr.length)
    return compArr[C_choice]
}

const checkWin = (choice) => {
    if(choice){
        console.log("You Wins")
    } else if(!choice){
        console.log("You Loses")
    }
   
  }
  const playGame = (choice) => {
    console.log(`User Choice ${choice}`);
    let com = compChoice() ;
    console.log(`The Computer Choice ${com}`)
    if(choice === com){
        console.log("Here is The Draw");
    }
  else{
    let userwin = true ;
    if(choice === "Rock"){
        // paper sciccors
        userwin = com === "Paper" ? false : true
    } else if(choice === "Paper"){
        // Sciccor rock
    userwin === com === "Sciccors" ? false : true
    }
    else{
        // rock paper
        userwin = com === "Rock" ? false : true
    }
checkWin(choice)
  }
}
  
  main.forEach((choice) => {
  choice.addEventListener('click' , () => {
    let id = choice.getAttribute('id') ;
    playGame(id) ;
  })
})

  