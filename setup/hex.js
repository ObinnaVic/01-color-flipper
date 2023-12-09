const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorValue = document.querySelector(".color");
const btn = document.getElementById("btn");
const bodyStyle = document.body;

//addEventListener("event", function to perform);

btn.addEventListener("click", () => {
    let hexValue = "#";

    for (let i = 0; i < 6; i++) {
    //hexValue = hexValue + hex[getRandomValue()]; 
        
      hexValue += hex[getRandomValue()];
    }

    colorValue.textContent = hexValue;

    bodyStyle.style.backgroundColor = hexValue;

    console.log(colorValue.innerText);

});


const getRandomValue = () => {
    return Math.floor(Math.random() * hex.length);
}

