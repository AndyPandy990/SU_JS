function fruitAndVeggy(input) {
        let type = input[0];
        switch(type) {
            case "banana":
            case "apple":
            case "kiwi":
            case "cherry":
            case "lemon":
            case "grapes":
                console.log("fruit"); 
                break;
            case "cucumber":
            case "tomato":
            case "pepper":
            case "carrot":
                console.log("vegetable");
                break;
            default:
                console.log("unknown");
                break;
        }
}

fruitAndVeggy(["onion"]);