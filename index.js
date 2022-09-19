const gameBoard = document.querySelector('#board')
const container = document.querySelector('#board')
const newGame = document.querySelector('#new-game')
let tile1 = document.getElementById('one')
let tile2 = document.getElementById('two')
let tile3 = document.getElementById('three')
let tile4 = document.getElementById('four')
let tile5 = document.getElementById('five')
let tile6 = document.getElementById('six')
let tile7 = document.getElementById('seven')
let tile8 = document.getElementById('eight')
let tile9 = document.getElementById('nine')
let turn = 0
let moves = 0
let winner = false
let mathTile1 = 0
let mathTile2 = 0
let mathTile3 = 0
let mathTile4 = 0
let mathTile5 = 0
let mathTile6 = 0
let mathTile7 = 0
let mathTile8 = 0
let mathTile9 = 0
const xDraw = 'url("https://2.bp.blogspot.com/-44FEkFGb5h8/Ux3Ul5ly3LI/AAAAAAAAEGU/jl4_ktKNJp0/s1600/playX.png")'
const oDraw = 'url("https://1.bp.blogspot.com/-lyELSi3oPWc/Ux3UlhpiAWI/AAAAAAAAEGI/VLvmMCW7aco/s1600/playO.png")'

tile1.addEventListener("click", click1)
tile2.addEventListener("click", click2)
tile3.addEventListener("click", click3)
tile4.addEventListener("click", click4)
tile5.addEventListener("click", click5)
tile6.addEventListener("click", click6)
tile7.addEventListener("click", click7)
tile8.addEventListener("click", click8)
tile9.addEventListener("click", click9)

tile1.addEventListener("click", changeDisplay)
tile2.addEventListener("click", changeDisplay)
tile3.addEventListener("click", changeDisplay)
tile4.addEventListener("click", changeDisplay)
tile5.addEventListener("click", changeDisplay)
tile6.addEventListener("click", changeDisplay)
tile7.addEventListener("click", changeDisplay)
tile8.addEventListener("click", changeDisplay)
tile9.addEventListener("click", changeDisplay)

function changeDisplay() {
    let turnDisplay = document.getElementById("turn-display")

    if (turn == 1) {
        turnDisplay.innerHTML = "Player O's Move"
    } else if (turn == 0) {
        turnDisplay.innerHTML = "Player X's Move"
    }
}

function click1() {
    if (turn == 0) { 
        tile1.style.background = xDraw;
        tile1.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile1 = mathTile1 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile1.style.background = oDraw;
        tile1.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile1 = mathTile1 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile1.removeEventListener("click", click1)
}

function click2() {
    if (turn == 0) {
        tile2.style.background = xDraw;
        tile2.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile2 = mathTile2 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile2.style.background = oDraw;
        tile2.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile2 = mathTile2 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile2.removeEventListener("click", click2)
};

function click3() {
    if (turn == 0) { 
        tile3.style.background = xDraw;
        tile3.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile3 = mathTile3 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile3.style.background = oDraw;
        tile3.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile3 = mathTile3 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile3.removeEventListener("click", click3)
};

function click4() {
    if (turn == 0) {
        tile4.style.background = xDraw;
        tile4.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile4 = mathTile4 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile4.style.background = oDraw;
        tile4.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile4 = mathTile4 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile4.removeEventListener("click", click4)
};

function click5() {
    if (turn == 0) {
        tile5.style.background = xDraw;
        tile5.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile5 = mathTile5 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile5.style.background = oDraw;
        tile5.style.backgroundSize = "contain";
        moves = moves + 1
        turn = turn - 1
        mathTile5 = mathTile5 + 1
        checkOWinner()
        checkTie()
    }

    tile5.removeEventListener("click", click5)
};

function click6() {
    if (turn == 0) {
        tile6.style.background = xDraw;
        tile6.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile6 = mathTile6 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile6.style.background = oDraw;
        tile6.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile6 = mathTile6 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile6.removeEventListener("click", click6)
};

function click7() {
    if (turn == 0) { 
        tile7.style.background = xDraw;
        tile7.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile7 = mathTile7 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile7.style.background = oDraw;
        tile7.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile7 = mathTile7 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile7.removeEventListener("click", click7)
};

function click8() {
    if (turn == 0) {
        tile8.style.background = xDraw;
        tile8.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile8 = mathTile8 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile8.style.background = oDraw;
        tile8.style.backgroundSize = "contain";
        turn = turn -1
        mathTile8 = mathTile8 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile8.removeEventListener("click", click8)
};

function click9() {
    if (turn == 0) {
        tile9.style.background = xDraw;
        tile9.style.backgroundSize = "contain";
        turn = turn + 1
        mathTile9 = mathTile9 + 2
        moves = moves + 1
        checkXWinner()
        checkTie()
    } else if (turn == 1) {
        tile9.style.background = oDraw;
        tile9.style.backgroundSize = "contain";
        turn = turn - 1
        mathTile9 = mathTile9 + 1
        moves = moves + 1
        checkOWinner()
        checkTie()
    }

    tile9.removeEventListener("click", click9)
};

newGame.addEventListener('click', restart)

function restart() {
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild)
    }
    
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0

    function checkXWinner() {
        if ((mathTile1 == 2) && (mathTile2 == 2) && (mathTile3 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile1 == 2) && (mathTile4 == 2) && (mathTile7 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile7 == 2) && (mathTile8 == 2) && (mathTile9 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile3 == 2) && (mathTile6 == 2) && (mathTile9 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile1 == 2) && (mathTile5 == 2) && (mathTile9 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile3 == 2) && (mathTile5 == 2) && (mathTile7 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile2 == 2) && (mathTile5 == 2) && (mathTile8 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile4 == 2) && (mathTile5 == 2) && (mathTile6 == 2)) {
            window.alert('Player X Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        }
    }
            // Check for O Wins
            function checkOWinner() {
            if ((mathTile1 == 1) && (mathTile2 == 1) && (mathTile3 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile1 == 1) && (mathTile4 == 1) && (mathTile7 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile7 == 1) && (mathTile8 == 1) && (mathTile9 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile3 == 1) && (mathTile6 == 1) && (mathTile9 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile1 == 1) && (mathTile5 == 1) && (mathTile9 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile3 == 1) && (mathTile5 == 1) && (mathTile7 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile2 == 1) && (mathTile5 == 1) && (mathTile8 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
        } else if ((mathTile4 == 1) && (mathTile5 == 1) && (mathTile6 == 1)) {
            window.alert('Player O Wins!')
            winner = true;
            tile1.removeEventListener('click', click1)
            tile2.removeEventListener('click', click2)
            tile3.removeEventListener('click', click3)
            tile4.removeEventListener('click', click4)
            tile5.removeEventListener('click', click5)
            tile6.removeEventListener('click', click6)
            tile7.removeEventListener('click', click7)
            tile8.removeEventListener('click', click8)
            tile9.removeEventListener('click', click9)
    }}
    



    function click1() {
        if (turn == 0) { 
            tile1.style.background = xDraw;
            tile1.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile1 = mathTile1 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile1.style.background = oDraw;
            tile1.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile1 = mathTile1 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile1.removeEventListener("click", click1)
    }

    const tile1 = document.createElement('div')
    tile1.classList.add('tile')
    tile1.setAttribute('id', 'one')
    container.appendChild(tile1)
    tile1.addEventListener('click', click1)
    
    function click2() {
        if (turn == 0) {
            tile2.style.background = xDraw;
            tile2.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile2 =  mathTile2 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile2.style.background = oDraw;
            tile2.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile2 = mathTile2 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile2.removeEventListener("click", click2)
    };
    
    const tile2 = document.createElement('div')
    tile2.classList.add('tile')
    tile2.setAttribute('id', 'two')
    container.appendChild(tile2)
    tile2.addEventListener('click', click2)
    
    function click3() {
        if (turn == 0) { 
            tile3.style.background = xDraw;
            tile3.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile3 = mathTile3 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile3.style.background = oDraw;
            tile3.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile3 = mathTile3 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile3.removeEventListener("click", click3)
    };
    
    const tile3 = document.createElement('div')
    tile3.classList.add('tile')
    tile3.setAttribute('id', 'three')
    container.appendChild(tile3)
    tile3.addEventListener('click', click3)
    
    function click4() {
        if (turn == 0) {
            tile4.style.background = xDraw;
            tile4.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile4 = mathTile4 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile4.style.background = oDraw;
            tile4.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile4 = mathTile4 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile4.removeEventListener("click", click4)
    };
    
    const tile4 = document.createElement('div')
    tile4.classList.add('tile')
    tile4.setAttribute('id', 'four')
    container.appendChild(tile4)
    tile4.addEventListener('click', click4)
    
    function click5() {
        if (turn == 0) {
            tile5.style.background = xDraw;
            tile5.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile5 = mathTile5 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile5.style.background = oDraw;
            tile5.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile5 = mathTile5 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile5.removeEventListener("click", click5)
    };
    
    const tile5 = document.createElement('div')
    tile5.classList.add('tile')
    tile5.setAttribute('id', 'five')
    container.appendChild(tile5)
    tile5.addEventListener('click', click5)
    
    function click6() {
        if (turn == 0) {
            tile6.style.background = xDraw;
            tile6.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile6 = mathTile6 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile6.style.background = oDraw;
            tile6.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile6 = mathTile6 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile6.removeEventListener("click", click6)
    };
    
    const tile6 = document.createElement('div')
    tile6.classList.add('tile')
    tile6.setAttribute('id', 'six')
    container.appendChild(tile6)
    tile6.addEventListener('click', click6)
    
    function click7() {
        if (turn == 0) { 
            tile7.style.background = xDraw;
            tile7.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile7 = mathTile7 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile7.style.background = oDraw;
            tile7.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile7 = mathTile7 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile7.removeEventListener("click", click7)
    };
    
    const tile7 = document.createElement('div')
    tile7.classList.add('tile')
    tile7.setAttribute('id', 'seven')
    container.appendChild(tile7)
    tile7.addEventListener('click', click7)
    
    function click8() {
        if (turn == 0) {
            tile8.style.background = xDraw;
            tile8.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile8 = mathTile8 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile8.style.background = oDraw;
            tile8.style.backgroundSize = "contain";
            turn = turn -1
            mathTile8 = mathTile8 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile8.removeEventListener("click", click8)
    };
    
    const tile8 = document.createElement('div')
    tile8.classList.add('tile')
    tile8.setAttribute('id', 'eight')
    container.appendChild(tile8)
    tile8.addEventListener('click', click8)
    
    function click9() {
        if (turn == 0) {
            tile9.style.background = xDraw;
            tile9.style.backgroundSize = "contain";
            turn = turn + 1
            mathTile9 = mathTile9 + 2
            moves = moves + 1
            checkXWinner()
            checkTie()
        } else if (turn == 1) {
            tile9.style.background = oDraw;
            tile9.style.backgroundSize = "contain";
            turn = turn - 1
            mathTile9 = mathTile9 + 1
            moves = moves + 1
            checkOWinner()
            checkTie()
        }
    
        tile9.removeEventListener("click", click9)
    };

    const tile9 = document.createElement('div')
    tile9.classList.add('tile')
    container.appendChild(tile9)
    tile9.setAttribute('id', 'nine')
    tile9.addEventListener('click', click9)

    checkXWinner();
    checkOWinner();

    // turnDisplay

    function changeDisplay() {
        let turnDisplay = document.getElementById("turn-display")
    
        if (turn == 1) {
            turnDisplay.innerHTML = "Player O's Move"
        } else if (turn == 0) {
            turnDisplay.innerHTML = "Player X's Move"
        }
    }

    tile1.addEventListener("click", changeDisplay)
    tile2.addEventListener("click", changeDisplay)
    tile3.addEventListener("click", changeDisplay)
    tile4.addEventListener("click", changeDisplay)
    tile5.addEventListener("click", changeDisplay)
    tile6.addEventListener("click", changeDisplay)
    tile7.addEventListener("click", changeDisplay)
    tile8.addEventListener("click", changeDisplay)
    tile9.addEventListener("click", changeDisplay)

}

// Win Message

function checkXWinner() {
    if ((mathTile1 == 2) && (mathTile2 == 2) && (mathTile3 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile1 == 2) && (mathTile4 == 2) && (mathTile7 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile7 == 2) && (mathTile8 == 2) && (mathTile9 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile3 == 2) && (mathTile6 == 2) && (mathTile9 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile1 == 2) && (mathTile5 == 2) && (mathTile9 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile3 == 2) && (mathTile5 == 2) && (mathTile7 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile2 == 2) && (mathTile5 == 2) && (mathTile8 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    } else if ((mathTile4 == 2) && (mathTile5 == 2) && (mathTile6 == 2)) {
        window.alert('Player X Wins!')
        winner = true;
        tile1.removeEventListener('click', click1)
        tile2.removeEventListener('click', click2)
        tile3.removeEventListener('click', click3)
        tile4.removeEventListener('click', click4)
        tile5.removeEventListener('click', click5)
        tile6.removeEventListener('click', click6)
        tile7.removeEventListener('click', click7)
        tile8.removeEventListener('click', click8)
        tile9.removeEventListener('click', click9)
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
    }
}

function checkOWinner() {
    if ((mathTile1 == 1) && (mathTile2 == 1) && (mathTile3 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile1 == 1) && (mathTile4 == 1) && (mathTile7 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile7 == 1) && (mathTile8 == 1) && (mathTile9 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile3 == 1) && (mathTile6 == 1) && (mathTile9 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile1 == 1) && (mathTile5 == 1) && (mathTile9 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile3 == 1) && (mathTile5 == 1) && (mathTile7 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile2 == 1) && (mathTile5 == 1) && (mathTile8 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
} else if ((mathTile4 == 1) && (mathTile5 == 1) && (mathTile6 == 1)) {
    window.alert('Player O Wins!')
    winner = true;
    tile1.removeEventListener('click', click1)
    tile2.removeEventListener('click', click2)
    tile3.removeEventListener('click', click3)
    tile4.removeEventListener('click', click4)
    tile5.removeEventListener('click', click5)
    tile6.removeEventListener('click', click6)
    tile7.removeEventListener('click', click7)
    tile8.removeEventListener('click', click8)
    tile9.removeEventListener('click', click9)
    mathTile1 = 0
    mathTile2 = 0
    mathTile3 = 0
    mathTile4 = 0
    mathTile5 = 0
    mathTile6 = 0
    mathTile7 = 0
    mathTile8 = 0
    mathTile9 = 0
}}

function checkTie() {
    if (moves == 9 && winner == false) {
        window.alert('Tie Game!')
        mathTile1 = 0
        mathTile2 = 0
        mathTile3 = 0
        mathTile4 = 0
        mathTile5 = 0
        mathTile6 = 0
        mathTile7 = 0
        mathTile8 = 0
        mathTile9 = 0
        moves = 0
}}