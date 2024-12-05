function miniGame() {
    const firstComputer = Math.round(Math.random() * 100);
    console.log(firstComputer);
    let firstNumber = 0;
    let lastNumber = 100;
    let secondComputer;

    do {
        secondComputer = Math.floor((firstNumber + lastNumber) / 2);
        console.log("Компьютер 2: Пробую число " + secondComputer);
        if (secondComputer > firstComputer) {
            console.log("Компьютер 1: Меньше");
            lastNumber = secondComputer;
        } else if (secondComputer < firstComputer) {
            console.log("Компьютер 1: Больше");
            firstNumber = secondComputer;
        } else {
            console.log("Компьютер 1: Угадал!");
        }
    } while (secondComputer != firstComputer);
}

miniGame();