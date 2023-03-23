// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draw: 0
}

const game = {
    playerHand: null,
    aiHand: null,
    playerHandHTML: null
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    //przypisanie z data-option - dostajemy sie do wlasciwosci po kropce
    game.playerHand = this.dataset.option
}

hands.forEach(hand => hand.addEventListener('click', handSelection));