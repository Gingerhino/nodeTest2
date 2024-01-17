import chalk from "chalk";

const myJoke = "I cannnot decide which type of mattress to buy, I might have to sleep on it.";

const words = myJoke.split(" ");

let coloredMyJoke = " ";

for(let i = 0; i < words.length; i++) {
    const color = chalk.rgb(getRandomColor(), getRandomColor(), getRandomColor());

    coloredMyJoke += color(words[i]) + " ";

}

console.log(coloredMyJoke);

function getRandomColor() {
    return Math.floor(Math.random() * 256);
}
