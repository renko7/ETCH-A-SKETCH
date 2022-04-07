const board = document.querySelector('.board')
const boxes = document.querySelectorAll('.box')

for (const box of boxes) {
    box.addEventListener("mouseover", (e) => e.target.style.background = "black")
}