const express = require("express");
const path = require("path");

const compliments = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "Your mom!",
    "Your dad!",
    "You look like a frog!",
    "Doo doo head!"
]

function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function (req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
});

app.get("/insult", function (req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");

