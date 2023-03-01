function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let count = 0;
  let won = false;
  return (guess) => {
    if (won) return "The game is over, you already won!";
    count++;
    if (guess < answer) {
      return `${guess} is too low!`;
    } else if (guess > answer) {
      return `${guess} is too high!`;
    } else {
      won = true;
      return `You win! You found ${answer} in ${count} guesses.`;
    }
  };
}

module.exports = { guessingGame };
