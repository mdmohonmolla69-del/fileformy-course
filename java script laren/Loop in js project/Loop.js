// Loop project in js

// Guess The Number Function
function guessTheNumber(deficulty) {
    let randomNumber;
    let attemps = 0;
    let maxAttemps;
    let range;

    switch (deficulty) {
        case 'easy':
            range = 10;
            maxAttemps = 5;
            randomNumber = Math.floor(Math.random() * 10) + 1; // Range 1 - 10
            // console.log(randomNumber);
            break;
        case 'medium':
            range = 100;
            maxAttemps = 7;
            randomNumber = Math.floor(Math.random() * 100) + 1; // Range 1 - 100
            // console.log(randomNumber);
            break;
        case 'hard':
            range = 1000;
            maxAttemps = 10;
            randomNumber = Math.floor(Math.random() * 1000) + 1; // Range 1 - 1000
            // console.log(randomNumber);
            break;
        default:
            console.error(
                "Invalid deficulty lavel. choose 'easy', 'medium' 'hard'"
            );
    }

    // Get a number input from user !!
    while (attemps < maxAttemps) {
        let guess = parseInt(prompt(`Gusse a number between 1 and ${range} (Inculuciv). You have attemps ${maxAttemps - attemps} attemps left`));
        attemps++;

        if (guess === randomNumber) {
            console.log('Congratulations! You Guess The Number in', attemps, ' attemps');
            break;
        } else if (guess < randomNumber) {
            console.log('Too Low. Try Again');
        } else {
            console.log('Too High. Try Again');
        }

        console.log(guess);
    }
    if (maxAttemps === attemps) {
        console.log('Sorry, you have no any attempps. The Number was', randomNumber);
    }
}

//get user input data defi lavel

let deficulty = prompt('Choode deficulty (easy, medium, hard)').toLowerCase();
guessTheNumber(deficulty);

// console.log(deficulty);