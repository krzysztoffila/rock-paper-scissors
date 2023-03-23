// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: null,
    aiHand: null
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    //przypisanie z data-option - dostajemy sie do wlasciwosci po kropce
    game.playerHand = this.dataset.option;
    hands.forEach(hand => {
        hand.style.boxShadow = "";
    })
    this.style.boxShadow = "0 0 0 4px yellow";
}

hands.forEach(hand => hand.addEventListener('click', handSelection));