const squares = document.querySelectorAll('.colorSquare')
const timesClicked = {
  'red' :0,
  'yellow' : 0,
  'green' : 0
}
squares.forEach(square =>{
  square.onclick = () => {
  timesClicked[square.value]++
    square.innerText=timesClicked[square.value]
    
    //console.log(square.value)
  }  
})

function clearGame(){  
  timesClicked.red=0
  timesClicked.green=0
  timesClicked.yellow=0
  squares.forEach(square =>{    
    square.innerText=timesClicked[square.value]=''
  })
}
const clear = document.getElementById('game-over')
clear.onclick = () => clearGame()
