let play = document.querySelector('.play')
let config = document.querySelector('.config')
let rules = document.querySelector('.rules')

function visualizarStart() {
    if (play.hidden == true) {
        play.hidden = false
    } else if (play.hidden == false) {
        play.hidden = true
    }
    config.hidden = true
    rules.hidden = true
}

function visualizarConfig() {
    if (config.hidden == true) {
        config.hidden = false
    } else if (config.hidden == false) {
        config.hidden = true
    }
    play.hidden = true
    rules.hidden = true
}

function visualizarRegras() {
    if (rules.hidden == true) {
        rules.hidden = false
    } else if (rules.hidden == false) {
        rules.hidden = true
    }
    play.hidden = true
    config.hidden = true
}