function projects(input){
    let architectName = input[0];
    let projectsCount = Number(input[1]);
       
        let oneProjectTime = 3;
        let neededHours = projectsCount * oneProjectTime;
        console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${projectsCount} project/s.`);
}

projects(["Andrey", "9"]);

// 1. Името на архитекта - текст
// 2. Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100