const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const colorValue = document.querySelector(".color");
const btn = document.getElementById("btn");
const bodyValue = document.body;


btn.addEventListener("click", () => {
    let colorIndex = colors[getRandomValue()];

    colorValue.textContent = colorIndex;

    bodyValue.style.backgroundColor = colorIndex;
})

const getRandomValue = () => {
    return Math.floor(Math.random() * colors.length);
};

