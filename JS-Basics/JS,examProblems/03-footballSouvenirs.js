function footballSouvenirs(input) {
    let text = input[0];
    let type = input[1];
    let countBought = Number(input[2]);

    let prod = 0;
    let isTrue = false;

    switch (text) {
        case "Argentina":
            switch (type) { 
            case "flags": prod = countBought * 3.25; break;
            case "caps": prod = countBought * 7.20; break;
            case "posters": prod = countBought * 5.10; break;
            case "stickers": prod = countBought * 1.25; break;
            default:
                console.log("Invalid stock!");
            break;
            }
        break;

        case "Brazil":
            switch (type) { 
                case "flags": prod = countBought * 4.20; break;
                case "caps": prod = countBought * 8.50; break;
                case "posters": prod = countBought * 5.35; break;
                case "stickers": prod = countBought * 1.20; break;
                default:
                    console.log("Invalid stock!");
                break;
                }
        break;

        case "Croatia":
            switch (type) { 
                case "flags": prod = countBought * 2.75; break;
                case "caps": prod = countBought * 6.90; break;
                case "posters": prod = countBought * 4.95; break;
                case "stickers": prod = countBought * 1.10; break;
                default:
                    console.log("Invalid stock!");
                break;
                }
        break;

        case "Denmark":
            switch (type) { 
                case "flags": prod = countBought * 3.10; break;
                case "caps": prod = countBought * 6.50; break;
                case "posters": prod = countBought * 4.80; break;
                case "stickers": prod = countBought * 0.90; break;
                default:
                    console.log("Invalid stock!");
                break;
                }
        break;

        default:
            console.log("Invalid country!");
        break;
    }

    if (prod === 0) {
        isTrue = true;
    } else if (text === "Argentina") {
        console.log(`Pepi bought ${countBought} ${type} of ${text} for ${prod.toFixed(2)} lv.`);
    } else if (text === "Brazil") {
        console.log(`Pepi bought ${countBought} ${type} of ${text} for ${prod.toFixed(2)} lv.`);
    } else if (text === "Croatia") {
        console.log(`Pepi bought ${countBought} ${type} of ${text} for ${prod.toFixed(2)} lv.`);
    } else if (text === "Denmark") {
        console.log(`Pepi bought ${countBought} ${type} of ${text} for ${prod.toFixed(2)} lv.`);
    }

}
footballSouvenirs(["Brazil", "caps", "5"]);