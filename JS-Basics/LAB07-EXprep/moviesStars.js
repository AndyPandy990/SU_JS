 function moviesStars(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    while (command !== "ACTION") {
        let name = command;
        let salary = 0;
        if (name.length <= 15) {
            salary = Number(input[index]);
            index++;
            budget -= salary;
        } else {
            salary = budget * 0.20;
        }

        budget -= salary;
        if (budget < 0) {
            break;
        }
        command = input[index];
        index++;
    }
    console.log(budget);
    }
moviesStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"
    ])