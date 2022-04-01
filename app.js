document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const currentScore = document.querySelector('#currentScore');
  var counter = 0;
  let column = 10
  let squares = [];
  let isGameOver = false;

  function createBoard() {
    currentScore.innerHTML = counter;
    let dataArray = [1, 2, 3, 'M'];
    for (let i = 0; i < column * column; i++) {
      const square = document.createElement('div')
      square.innerHTML = dataArray[Math.floor(Math.random() * dataArray.length)];
      square.classList.add("box")
      square.classList.add("hidden")
      grid.appendChild(square)
      squares.push(square)
      console.log(squares)
      square.addEventListener('click', function (e) {
        click(square)
      })
    }
  }
  createBoard()

  //click on square actions
  function click(square) {
    if (!isGameOver) {
      counter++;
      square.classList.add("visible")
      if (square.innerText === "M") {
        square.classList.add("mine")
        alert("You have found a mine!");
        isGameOver = true;
      } else {
        currentScore.innerHTML = counter;
      }
    } else {
      alert("Game is Over")
    }

  }
})
