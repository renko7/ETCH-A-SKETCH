const board = document.querySelector('.board')
const sizeForm = document.querySelector("[data-name='submit-form']")
const boardDimensions = 420;


sizeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    size = e.target.elements[0].value
    generateBoard(size)
})

function generateBoard(rowLength) {
    clearBoard()
    const size = boardDimensions / rowLength
    const boxCount = rowLength ** 2
    console.log('size', size)
    console.log('box count', boxCount)
    for (let i = 0; i < boxCount; i++) {
        const box = document.createElement('div')
        box.style.width = `${size}px`
        box.style.height = `${size}px`
        box.style.backgroundColor = 'white'
        box.addEventListener("mouseover", (e) => e.target.style.background = "black")
        board.append(box)
    }
}

function clearBoard() {
    board.innerHTML = ''
}

generateBoard(7)
