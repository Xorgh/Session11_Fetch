const state = {
    playerName: "Kasper",
    score: 1337,
    level: 5
}

const jsonState = JSON.stringify(state)

localStorage.setItem("state", jsonState)

const storedState = JSON.parse(localStorage.getItem("state"))

console.log(storedState.score)