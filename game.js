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
// Wybór gracza
const hands = [...document.querySelectorAll('.select img')];

function handSelection() {
    //przypisanie z data-option - dostajemy sie do wlasciwosci po kropce
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 4px yellow";
}
//pobieranie losowo na podstawie zmiennej hands
const aiChoice = () => hands[Math.floor(Math.random() * 3)].dataset.option;

function checkResult(player, ai) {
    console.log(`gracz: ${player} | ai: ${ai}`)
    if (player === ai) {
        console.log('REMIS')
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        console.log('Wygrywa Gracz')
    } else console.log('Wygrywa Komputer')
}

function startGame() {
    // zwraca null
    if (!game.playerHand) return alert('Wybierz dłoń');
    game.aiHand = aiChoice()

    const gameResult = checkResult(game.playerHand, game.aiHand)
}


hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame);